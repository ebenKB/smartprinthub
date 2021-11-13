import React, { useState, useEffect } from "react";
import AppMainContent from "components/app-main-content/app-main-content";
import { SubmitHandler, useForm } from "react-hook-form";
import Help from "components/HelpWrapper/HelpWrapper";
import HelpContent from 'utils/help/JobActions';
import AppContentWrapper from "components/app-content-wrapper/app-content-wrapper";
import Divider from "components/AppDivider/AppDivider";
import ShowCompanyDetails from "components/ShowCompanyDetails/ShowCompanyDetails";
import { Button, Form, Radio, Icon, Dropdown } from "semantic-ui-react";
import CompanyDirectory from "components/floating-company-directory/floating-company-directory";
import FormGroup from "components/form-group/form-groupv2";
import { InputWithValidation } from "components/InputWithValidation/InputWithValidation";
import TextAreaWithValidation from "components/TextAreaWithValidation/TextAreaWithValidation";
import { Link } from 'react-router-dom';
import { ReactComponent as ForwardArrow } from 'svg/forward-arrow.svg';
import { PaperSizeType } from "enums/PaperSizeType.enum";
import AddItem from 'components/add-item/add-item';
import ViewJobDrafts from 'components/ViewJobDrafts/ViewJobDrafts';
import { resetCurrentJob, saveCurrentJobProgress, selectCurrentJob, } from "redux/slices/job";
import { connect, useDispatch, useSelector } from "react-redux";
import DefaultSizes from "components/DefaultPaperSizes/DefaultPaperSizes";
import CustomPaperSize from "components/CustomPaperSize/CustomPaperSize";
import Dropzone from 'components/dropzone/dropzone';
import FileThumbnail from "components/FileThumbnail/FileThumbnail";
import { formatCompanyJobTypes, isJobValid, jobHasFile, saveJobProgress } from "./CreateJob.service";
import { loadAllCompanyJobTypes } from "apiService/jobType";
import { selectCompanyJobTypes, setCompanyJobTypes } from "redux/slices/company";
import { SyntheticEvent } from "react-router/node_modules/@types/react";
import { setNotification } from "redux/slices/app";
import { NotificationType } from "enums/NotificationType.enum";
import FileReader from 'utils/FileReader';
import history from "utils/history";
import { defaultJob } from "utils/job";
import { addJobAsDraft, removeJobFromDrafts, } from "redux/slices/jobDrafts";
import { getJobEstimate } from "apiService/job";

const CreateJob = (props: any) => {
  const dispatch = useDispatch();
  const currentJob = useSelector(selectCurrentJob);
  // const jobDrafts = useSelector(selectJobDrafts);
  const selectedCompanyJobTypes = useSelector(selectCompanyJobTypes);
  const [loadingCompanyJobTypes, setLoadingCompanyJobTypes] = useState(false);
  const [data, setData] = useState({
    paperSizeType: currentJob.paperSizeType || PaperSizeType.DEFAULT,
    allJobs: [],
    job: currentJob,
  })
  const {handleSubmit, control, getValues, reset, formState: { errors, isSubmitting, isValid }} = useForm(
    { mode: "onBlur",
    // defaultValues: {...defaultJob},
  });
  const [canShowCompanyDirectory, setCanShowCompanyDirectory] = useState(false);
  const [options, setOptions] = useState({
    canViewSavedJobs: false,
    canUploadNewFile: !jobHasFile(data.job),
    isBusy: false,
  })

  const toggleCompanyDirectoryForm = (status: boolean) => {
    setCanShowCompanyDirectory(status)
  }

  const handleJobCompanyChange = (newCompany: object) => {
    try {
      const { job, ...dataParts} = data;
      const { company, ...rest } = job;
      setData({
        ...dataParts,
        job: {
          ...rest,
          company: newCompany,
        }
      })
      // setData({ ...dataParts, job: {...rest, company: newCompany}});
  
      // dispatch(saveCurrentJobProgress({company: newCompany, ...rest }))
      loadCompanyJobTypes(newCompany);
    } catch (error) {
      console.log("error loading", error);
    }
  }

  const handlePaperSizeTypeChange = (e:SyntheticEvent<HTMLElement, Event>, paperValue: any) => {
    setData({
      ...data,
      paperSizeType: paperValue.value,
    })
  }

  const setJobDraftForEditing = () => {}

  const addJob  = async () => {
    const job = await loadJobEstimate();
    dispatch(addJobAsDraft(job));
    clearAllFields();
  }

  const clearAllFields = () => {
    dispatch(resetCurrentJob);
    setData({...data, job: currentJob})
    reset(defaultJob);
  }

  const handleJobTypeChange = (e:SyntheticEvent<HTMLElement, Event>, d:any) => {
    setData({...data, job: {...data.job, selectedJobType: d.value}})
  }
  
  // check when the units of measurement change or
  // when the default paper size changes.
  const handleDimensionUnitChange = (e: SyntheticEvent<HTMLElement>, d:any) => {
    setData({...data, job: {...data.job, defaultSize: d.value, }})
  }

  const handleUnitSelectionChange = (value:any) => {
    setData({...data, job: {...data.job, unit: `${value.name}`, defaultSize: null}})
  }

  const handleFileChange = async (file:any) => {
    try {
      const reader = new FileReader();
      if (file.length > 0) {
        reader.readFileAsDataURL(file, (results:any) => {
          setData({...data, job: {...data.job, file: results }})
        })
      }
    } catch (error) {
      console.log("error reading file", error);
    }
  }

  const handleDiscardFile = () => {
    setOptions({...options, canUploadNewFile: true})
  }

  // load the job types for the selected company
  const loadCompanyJobTypes = async (company: any) => {
    try {
      setLoadingCompanyJobTypes(true);
      // const company = data.job.company;
      console.log("Company", company);
      if (company) {
        const response = await loadAllCompanyJobTypes(company._id);
        const jobTypes = response.data.companyJobTypes;
        dispatch(setCompanyJobTypes({id: company._id, jobTypes}))
      }
      setLoadingCompanyJobTypes(false);
    } catch (error) {
      setLoadingCompanyJobTypes(false);
      dispatch(setCompanyJobTypes(null))
    }
  }

  // load default values
  useEffect(() => {
    loadCompanyJobTypes(data.job.company);
  }, [])

  // query api for job estimate
  const loadJobEstimate = async (values=null) => {
    const formData = values !== null ? values : getValues();
    try {
      const payload = {
        id: data.job.uuid,
        width: parseFloat(data.job.width),
        height: parseFloat(data.job.height),
        unit: data.job.paperSizeType === PaperSizeType.CUSTOM ? data.job.unit : "n/a",
        jobType: data.job.selectedJobType,
        paperSizeType: data.paperSizeType,
        quantity: parseInt(formData?.quantity),
        defaultSize: data.job.defaultSize,
      }
      // get estimate for the job
      const response = await getJobEstimate(payload);
      const job = {
        ...data.job,
        ...formData,
        ...response.data.costSummary,
      }
      return job;
    } catch (error) {
      console.log("Error getting estimate", error);
    }
  }

  const handleContinue: SubmitHandler<any> = async (values) => {
    const job = await loadJobEstimate(values);
    dispatch(saveCurrentJobProgress(job));
    history.push('/job/checkout');
  }

  const saveProgress = () => {
    const job = { 
      ...data.job, 
      ...getValues(), 
      paperSizeType: data.paperSizeType,
      selectedJobType: data.job.selectedJobType,
    };
    dispatch(saveCurrentJobProgress(job));
  }

  useEffect(() => {
    const intervalID = saveJobProgress(() => {
      if (!options.isBusy) {
        saveProgress();
        dispatch(setNotification({type: NotificationType.SUCCESS, message: "Job Saved"}))
      }
    });

    // cleanup
    return () => {
      if (intervalID) {
        clearInterval(intervalID);
      }
    }
  })

  const { job } = data;
  const { canUploadNewFile } = options;

  return (
    <AppMainContent
      hasAside
      aside={<Help helps={HelpContent} classes="p-l-15 p-r-15" />}
      parentClasses="app-pad opaque background"
    >
      <AppContentWrapper heading="New Job">
        <div className="p-l-10 p-l-10">
          <Divider type="thick" title="Company" />
          <div className="m-t-20">
            <ShowCompanyDetails company={data.job.company} />
            <div className="flex center space-out m-t-20">
              <div>Open company directory to select company</div>
              <Button
                content="Select new company"
                onClick={() => toggleCompanyDirectoryForm(true)}
                className="transparent app-primary"
              />
            </div>
            {canShowCompanyDirectory && (
              <CompanyDirectory
                handleCloseAction={() => toggleCompanyDirectoryForm(false)}
                handleAction={(value: object) => handleJobCompanyChange(value)}
              />
            )}
          </div>
        </div>
        <form onSubmit={handleSubmit(handleContinue)}>
          <Divider
						type="thick"
						title="Job Details"
						classes="m-t-40"
					/>
          <div className="m-b-20 m-t-20">
            <FormGroup
              center
              label="Job Title *"
              labelName=""
              component={<InputWithValidation
                error={errors.title ? true : false}
                placeholder="Enter Job Title"
                errorMessage={errors.title ? errors.title?.message : ""}
                name="title"
                type="text"
                defaultValue={job.title}
                validationRules={{
                  required: {value: true, message: "Job title is required"},
                  minLength: {value: 3, message: "Job title is too short"},
                }}
                classes=""
                control={control}
              />}
              inline
            />
          </div>
          <div className="m-b-20 m-t-20">
            <FormGroup
              inline
              center
              label="Job Type"
              labelName="job_type"
              component={
                <Dropdown
                  options={formatCompanyJobTypes(selectedCompanyJobTypes)}
                  loading={loadingCompanyJobTypes}
                  selection
                  fluid
                  disabled={loadingCompanyJobTypes}
                  onChange={handleJobTypeChange}
                  placeholder="Select Job Type"
                  defaultValue={data.job.selectedJobType}
                />
              //   <DropdownWithValidation
              //     control={control}
              //     name="job_type"
              //     error={errors.job_type ? true : false}
              //     errorMessage={errors.job_type ? errors.job_type.message : ""}
              //     validationRules={{required: true}}
              //     placeholder="Select Job type"
              //     fluid
              //     selection
              //     loading={loadingCompanyJobTypes}
              //     options={formatCompanyJobTypes(selectedCompanyJobTypes)}
              //     disabled={loadingCompanyJobTypes}
              // />
              }
            />
          </div>
          <div className="m-b-20 m-t-20">
            <FormGroup
              inline
              center
              label="Size"
              labelName="size"
              component={
              <>
                <div className="flex-inline m-b-20 size-options">
                  <Form.Field className="p-r-40">
                    <Radio
                      label="Default sizes"
                      name="sizeRadio"
                      value={PaperSizeType.DEFAULT}
                      checked={data.paperSizeType === PaperSizeType.DEFAULT}
                      onChange={handlePaperSizeTypeChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Custom size"
                      name="sizeRadio"
                      value={PaperSizeType.CUSTOM}
                      checked={data.paperSizeType === PaperSizeType.CUSTOM}
                      onChange={handlePaperSizeTypeChange}
                    />
                  </Form.Field>
                </div>
                <div>
                {(data.paperSizeType === PaperSizeType.DEFAULT) ? (
                  <DefaultSizes
                    selectedJobType={(data.job.selectedJobType !== null) ?  data.job.selectedJobType : {defaultSizes: []}} 
                    paperSizeValue={1}
                    classes=""
                    handleDropDownChange={handleDimensionUnitChange}
                    loading={false}
                  />
                ) : <CustomPaperSize
                      center
                      inline
                      handleUnitChange={handleUnitSelectionChange}
                      labelName="size"
                      label="Size"
                      defaultValue={data.job.unit}
                      defaultWidth={data.job.width}
                      defaultHeight={data.job.height}
                      selectedPaper={1}
                      control={control}
                      errors={errors}
                      getValues={getValues}
                    />}
                </div>
              </>
              }
            />
          </div>
          <div className="m-b-20 m-t-20">
            <FormGroup
              center
              label="Quantity *"
              labelName="quantity"
              component={<InputWithValidation
                error={errors.title ? true : false}
                errorMessage={errors.title ? errors.title?.message : ""}
                name="quantity"
                type="number"
                defaultValue={job.quantity}
                validationRules={{
                  required: {value: true, message: "Quantity title is required"},
                  pattern: {value: /^[1-9][0-9]*$/, message: "Quantity must be a number greater than 0"}
                }}
                classes=""
                control={control}
              />}
              inline
            />
          </div>
          {canUploadNewFile && (
              <div className="m-b-20">
              <FormGroup
                inline
                center
                label="File"
                labelName="File"
                component={<Dropzone
                  onFilesChange={(file:any) => handleFileChange(file)}
                  multiple={false}
                  singleUpload={true}
                />}
              />
            </div>
          )}
          {!canUploadNewFile && (
            <div className="m-t-20">
              <FormGroup
                inline
                center
                label="File"
                labelName="File"
                component={
                  <FileThumbnail
                    fileURL={job.file}
                    handleDiscardFile={handleDiscardFile}
                  />
                }
              />
            </div>
          )}
          <div className="m-b-20 m-t-20">
            <FormGroup
              inline
              center
              label="Comments"
              labelName="comment"
              component={<TextAreaWithValidation
                type="textarea"
                placeholder="Enter comment for the job"
                name="comment"
                control={control}
                defaultValue={job.comment}
                error={errors.comment ? true : false}
                errorMessage={errors.comment ? errors.comment?.message : ""}
                validationRules={{
                  required: false, minLength: {value: 8, message: "Comment is too short"}
                }}
              />}
            />
          </div>
          <div className="m-t-40 text-right flex center w-full reverse">
            <span className="m-r-10 m-l-20">
              <AddItem
                title="Add another job"
                classes="app-primary text-right m-t-20 m-b-20"
                iconClasses="small icon m-r-5"
                parentClasses="text-right"
                handleClick={addJob}
              />
            </span>
            {props.jobDrafts?.length > 0 && (
              <span>
                <Button
                  className="transparent clickable bold sm-caption"
                  size="medium"
                  type="button"
                  onClick = {() => setOptions({...options, canViewSavedJobs: !options.canViewSavedJobs})}
                >
                  <Icon name="save" />
                  {options.canViewSavedJobs ? "Hide saved jobs" : "View saved jobs"}
                </Button>
              </span>
            )}
          </div>
          <div className="w-full">
            <Divider type="thick" title={`Summary - ${data.allJobs.length} saved ${data.allJobs.length === 1 ? "job" : "jobs"}`} />
            {options.canViewSavedJobs && (
              <div className="m-t-10">
                <ViewJobDrafts jobs={props.jobDrafts} setJobForEditing={setJobDraftForEditing} />
              </div>
            )}
          </div>
          <div className="m-t-40 text-right inline center">
            <Link to="/jobs">
              <Button
                default
                size="small"
                content="Cancel"
              />
            </Link>
            <Button
              default
              content="Clear fields" 
              onClick={clearAllFields}
            />
            <Button
              as="button"
              type="submit"
              size="small"
              content={(
                <span className="flex-inline">
                  <span>Continue</span>
                  <ForwardArrow className="icon icon-12 m-l-5" />
                </span>
              )}
              positive
              className="flex center"
              disabled={!isValid || !isJobValid({...data.job, ...getValues()}) || isSubmitting}
              loading={isSubmitting}
            />
					</div>
        </form>
      </AppContentWrapper>
    </AppMainContent>
  )
}

const mapStateToProps = (state: { job: { jobDrafts: any; currentJob: any; }; }) => ({
  jobDrafts: state.job.jobDrafts,
  currentJob: state.job.currentJob,
});

const mapDispatchToProps = (dispatch: (arg0: any) => any) => ({
  addNewJobAsDraft: (job: any) => dispatch(addJobAsDraft(job)),
  saveJobProgress: (job: any) => dispatch(saveCurrentJobProgress(job)),
  removeJobFromDrafts: (jobID: any) => dispatch(removeJobFromDrafts(jobID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateJob);
