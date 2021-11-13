/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { PaperSizeType } from 'enums/PaperSizeType.enum';
import { Dropdown, Radio, Form, Grid, Label } from 'semantic-ui-react';
// import InputValidator from '../form-fields/input-validator/input-validator';
import './CustomSize.scss';
import sampleUnits from 'app/mockdata/units';
import { InputWithValidation } from 'components/InputWithValidation/InputWithValidation';

type Props = {
  label: string,
  inline: boolean,
  center: boolean,
  labelName: string,
  classes? : string,
	defaultValue: string,
	defaultWidth: string,
	defaultHeight: string,
	errors: any,
	control: any,
	getValues: () => any,
  selectedPaper: any,
  handleUnitChange: (value: any) => any,
}

const CustomPaperSize = ({
  label,
  inline,
  center,
  labelName,
  classes = '',
	defaultValue,
	defaultWidth,
	defaultHeight,
  selectedPaper,
	errors,
	control,
	getValues,
  handleUnitChange,
  ...rest
}: Props) => {

	const transformUnits = () => {
		const units= sampleUnits;
		return units.map((u: { id: number; name: string; symbol: string }): { key: any; text: any; value: any; } => ({ key: u.id, text: u.name, value: u.name }));
	}

	const handleChange = (data:any) => {
		const unit = sampleUnits.find((unit) => unit.name === data);
		handleUnitChange(unit);
	}

	const getCurrentDimenstion = () => {
		const {width, height} = getValues();
		return {width, height}
	}

return (
	<div className="custom-paper form-group form-group__wrapper">
		<Grid container columns={3}>
			<Grid.Row>
				<Grid.Column >
					<Dropdown
						placeholder="Units"
						fluid
						selection
						options={transformUnits()}
						onChange={(e, { value }) => handleChange(value)}
						defaultValue={defaultValue}
					/>
				</Grid.Column>
				<Grid.Column >
					<InputWithValidation
						error={errors.width ? true : false}
						placeholder="Enter width"
						errorMessage={errors.width ? errors.width?.message : ""}
						name="width"
						type="number"
						defaultValue={defaultWidth}
						validationRules={{
							required: {value: true, message: "Width is required"},
							min: {value: 0.1, message: "Should be a number greater than 0"},
						}}
						classes=""
						control={control}
					/>
				</Grid.Column>
				<Grid.Column>
					<InputWithValidation
						error={errors.width ? true : false}
						placeholder="Enter height"
						errorMessage={errors.height ? errors.height?.message : ""}
						name="height"
						type="number"
						defaultValue={defaultHeight}
						validationRules={{
							required: {value: true, message: "Height is required"},
							min: {value: 0.1, message: "Should be a number greater than 0"},
						}}
						classes=""
						control={control}
					/>
				</Grid.Column>
			</Grid.Row>
		</Grid>
		{/* <em className="text-grey">Dimension (width * height) 10 * 20 inches</em> */}
		{/* <Label as="span" content={`Dimension (width x  height) ${getCurrentDimenstion()?.width} x  ${getCurrentDimenstion()?.height}`} className="dimension_label" /> */}
	</div>
)};

export default CustomPaperSize;
