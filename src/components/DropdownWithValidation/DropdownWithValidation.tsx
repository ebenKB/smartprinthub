import React from "react";
import { Controller, Control, FieldValues, ValidationRules } from "react-hook-form";
import { Dropdown } from "semantic-ui-react";
import ErrorLabel from "../ErrorLabel/ErrorLabel";
import Input from '../form-fields/input/input';

type FormValues = {
  control: Control<FieldValues>,
  name: string, 
  defaultValue?: any, 
  validationRules: ValidationRules
  error: boolean,
  classes?: string,
  errorMessage: string,
  label?: string,
  disabled?: boolean,
  options: any,
  loading: boolean,
  fluid?: boolean,
  selection?: boolean,
  placeholder?: string,
  
};

export const DropdownWithValidation =({ control, name, loading, validationRules, errorMessage, options, ...rest } : FormValues) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        defaultValue={options[0]}
        render={({value, ...props}) => <Dropdown
        defaultValue={options[0]}
          options={options}
          loading={loading}
          {...props}
          {...rest}
      />}
        rules={validationRules}
      />
      <ErrorLabel error={errorMessage}/>
    </>
  )
}
