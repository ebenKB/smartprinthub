import React from "react";
import './form-group.scss';

interface Props {
  label: string,
  labelName: string,
  inline?: boolean,
  center: boolean,
  classes?: string,
  component?: any,
}
const FormGroup = ({ labelName , inline, center, classes, label, component}: Props) => {
  return (
    <div className={`form-group ${inline ? 'inline' : 'block'} ${center ? 'center' : ''} ${classes}`}>
      <label htmlFor={labelName}>
        <span className="">{label}</span>
      </label>
      <div>{component}</div>
    </div>
  );
}

export default FormGroup;
