import React from "react";
import { SyntheticEvent } from "react-router/node_modules/@types/react";
import { Dropdown } from "semantic-ui-react";

type Props = {
  selectedJobType:{defaultSizes:{name: string}[]},
  handleDropDownChange: (e: SyntheticEvent<HTMLElement>, value: any) => void,
  paperSizeValue:number,
  classes?:string,
  loading: boolean,
}

const DefaultSizes = ({ selectedJobType={defaultSizes:[]}, handleDropDownChange, paperSizeValue, loading, classes }: Props) => {
  return (
    <Dropdown
      placeholder="Select paper size"
      search
      selection
      options={selectedJobType?.defaultSizes.map((size:any) => ({text: size.name, key: size.name, value: size}))}
      // options={selectedJobType?.defaultSizes
      //   .map((s: { name: string; }) => ({ text: s.name.toUpperCase(), value: s.name, key: s.name }))}
      className={`md-dropdown ${classes}`}
      onChange={(e:SyntheticEvent<HTMLElement>, value:any) => handleDropDownChange(e, value)}
      loading={loading}
      disabled={loading}
      // defaultValue={selectedJobType.defaultSizes[0]}
    />
  )
}

export default DefaultSizes;
