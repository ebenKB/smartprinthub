/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { Dropdown, Radio, Form } from 'semantic-ui-react';
import InputValidator from '../form-fields/input-validator/input-validator';
import './dimension-input-group.scss';

const InputGroup = ({
  label,
  labelName,
  value1,
  value2,
  name1,
  name2,
  placeholder1,
  placeholder2,
  inline,
  center,
  classes,
  options,
  selectedPaper,
  paperSizeType,
  handleDropDownChange,
  handlePaperSizeTypeChange,
  ...rest
}) => (
	<div className={`form-group ${inline ? 'inline' : 'block'} ${center ? 'center' : ''} ${classes}`}>
		<label htmlFor={labelName}>
			<span className="">{label}</span>
		</label>
		<div className="form-group__wrapper">
			<div className="flex-inline m-b-20 size-options">
				<Form.Field>
					<Radio
						label="Default sizes"
						name="sizeRadio"
						value="default"
						checked={paperSizeType === 'default'}
						onChange={handlePaperSizeTypeChange}
					/>
				</Form.Field>
				<Form.Field>
					<Radio
						label="Custom size"
						name="sizeRadio"
						value="custom"
						checked={paperSizeType === 'custom'}
						onChange={handlePaperSizeTypeChange}
					/>
				</Form.Field>
			</div>
			{paperSizeType === 'default' && selectedPaper && (
				<div>
					<Dropdown
						placeholder="Select paper size"
						search
						selection
						options={selectedPaper.defaultSizes
						  .map((s) => ({ text: s.name, value: s.name, key: s.id }))}
						defaultValue={rest.defaultValue}
						className={`md-dropdown ${rest.classes}`}
						onChange={(e, { value }) => handleDropDownChange(value)}
					/>
				</div>
			)}
			{paperSizeType === 'custom' && (
				<div className="small">
					<Dropdown
						placeholder="Units"
						compact
						selection
						options={options}
						onChange={(e, { value }) => handleDropDownChange(value)}
					/>
					<InputValidator
						value={value1}
						name={name1}
						type="text"
						placeholder={placeholder1}
						{...rest}
						className="m-r-5"
					/>
					<InputValidator
						value={value2}
						name={name2}
						type="text"
						placeholder={placeholder2}
						{...rest}
					/>
				</div>
			)}
		</div>
	</div>
);

export default InputGroup;
