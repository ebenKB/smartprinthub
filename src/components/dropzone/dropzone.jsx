/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-fragments */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-undef */
import React, {
  useState, useEffect, createRef,
} from 'react';
import { Button } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';
import DropzoneItem from "../DropzoneItem/DropzoneItem";
import './dropzone.scss';

const dropzoneRef = createRef();

function KtDropzone({ onFilesChange, singleUpload, ...rest }) {
  const [hasEntered, setHasEntered] = useState(false);
  const [error, setError] = useState(null);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    // attach the files to the requisitions
    if (onFilesChange) {
      onFilesChange(files);
    }
  }, [files, /*onFilesChange*/]);

  /**
   * Listen to filed drop actions on the dropzone
   * @param {*} newFiles the files that were selected from the file chooser
   */
  const handleDrop = (newFiles) => {
    setHasEntered(false);
    setError(null);
    // check if the user tries to upload duplicate files and filter them out
    let filteredFiles = newFiles;
    for (const f of files) {
      filteredFiles = filteredFiles.filter((x) => x.name !== f.name);
    }

    // check if there were duplicate files found
    if (newFiles.length - filteredFiles.length > 0) {
      setError(`${(newFiles.length - filteredFiles.length)} duplicate file(s) rejected`);
    }

    const formatedFileObject = filteredFiles.map((f) => ({
      title: f.name.split(".")[0], // get filename without extension
      data: f,
    }));
    setFiles((oldFiles) => ([...oldFiles, ...formatedFileObject]));
  };

  const updateFile = (oldFile, newFile) => {
    const newFiles = files.map((f) => {
      if (f.title === oldFile.title) {
        // eslint-disable-next-line no-param-reassign
        f.title = newFile.title;
      }
      return f;
    });

    setFiles(newFiles);
  };

  // open file explorer to select files
  const openDialog = () => {
    if (dropzoneRef.current) {
      dropzoneRef.current.open();
    }
  };

  const handleDragEnter = () => {
    setHasEntered(true);
  };

  const handleDragLeave = () => {
    setHasEntered(false);
  };

  /**
   * Use this method to delete files from the dropzone
   * @param {*} file the file to be deleted
   */
  const handleDeleteFile = (file) => {
    setFiles(files.filter((x) => (x.data.name !== file.data.name)));
  };

  const getFileUploadAction = (getRootProps, getInputProps) => {
    if (singleUpload && files.length === 1) {
      return null;
    } else {
      return (
        <section className={`dropzone text-center ${hasEntered ? 'active' : ''}`}>
        <div {...getRootProps()} className="root">
          <input {...getInputProps()} />
          <div>
            <p>
              <span className="bold">
                Drop&nbsp;
              </span>
              <span>
                your files here or&nbsp;
              </span>
              <Button
                type="button"
                onClick={openDialog}
                className="transparent"
              >
                <span className="bold app-primary">browse</span>
              </Button>
            </p>
          </div>
        </div>
      </section>
      )
    }
  }
  // const { getRootProps, getInputProps, isDragActive } = useDropzone({onDrop})
  return (
	<div
		className="dropzone-wrapper"
	>
		{files && files.length > 0 && (
			<div className="dropzone-content active light-caption">
				{/* <div className="dropzone-content__heading">
					<div className="dropzone-heading__items">
						<div>Name</div>
						<div>Type</div>
					</div>
				</div> */}
				<div className="dropzone-content__body">
					{files.map((file, idx) => (
						<DropzoneItem
							file={file}
							handleFileUpdate={(old, newFile) => updateFile(old, newFile)}
							deleteFile={() => handleDeleteFile(file)}
							idx={idx}
							key={idx}
						/>
					))}
				</div>
			</div>
		)}
		{error && (
			<div className="kt-danger m-t-20 m-b-20">{error}</div>
		)}
		<Dropzone
			onDrop={(acceptedFiles) => handleDrop(acceptedFiles)}
			onDragEnter={handleDragEnter}
			onDragLeave={handleDragLeave}
			noClick
			ref={dropzoneRef}
      {...rest}
		>
			{({ getRootProps, getInputProps }) => (
        getFileUploadAction(getRootProps, getInputProps)
			)}
		</Dropzone>
	</div>
  );
}

export default KtDropzone;
