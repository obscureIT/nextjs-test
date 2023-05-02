import React from "react";
import Select from "react-select";

const CustomSelect = (props) => {
  return (
    <Select
      options={props.options}
      onChange={props.onChange}
      value={props.value}
      placeholder={props.placeholder}
    />
  );
};

export default CustomSelect;
