import React from "react";
import { Controller, Control, FieldValues, ValidationRules } from "react-hook-form";
import ErrorLabel from "../ErrorLabel/ErrorLabel";
import Input from '../form-fields/input/input';

type FormValues = {
  control: Control<FieldValues>,
  name: string, 
  defaultValue?: string, 
  validationRules: ValidationRules
  error: boolean,
  classes: string,
  placeholder: string,
  type: string,
  errorMessage: string,
};

export const InputWithValidation =({ control, name, defaultValue="", validationRules, type, errorMessage, ...rest } : FormValues) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={(props) => <Input type={type}  {...props} {...rest} />}
        rules={validationRules}
      />
      <ErrorLabel error={errorMessage}/>
    </>
  )
}
