import ErrorLabel from "components/ErrorLabel/ErrorLabel";
import Textarea from "components/form-fields/textarea/textarea";
import React from "react";
import { Controller, Control, FieldValues, ValidationRules, } from "react-hook-form";

type FormValues = {
  control: Control<FieldValues>,
  name: string, 
  defaultValue?: string, 
  validationRules: ValidationRules
  error: boolean,
  classes?: string,
  placeholder?: string,
  type: string,
  errorMessage: string,
  label?: string,
  rows?: number,
  cols?:number,
};

const TextAreaWithValidation = ({ control, defaultValue, errorMessage, error, type,
  validationRules, name, classes, placeholder, ...rest } : FormValues) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={(props) => <Textarea
          rows={rest.rows}
          cols={rest.cols}
          classes={classes}
          {...rest}
          {...props}
          placeholder={placeholder}
        />}
        rules={validationRules}
      />
      <ErrorLabel error={errorMessage}/>
    </>
  )
}

export default TextAreaWithValidation;
