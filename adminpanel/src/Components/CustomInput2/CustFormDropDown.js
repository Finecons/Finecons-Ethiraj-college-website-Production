// CustomDropdownMui.js
import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
// import "./CustomDropdownMui.css";

// import "../ComponentsCss/componet.css";
import { InputLabel } from "@mui/material";
import { Field, ErrorMessage } from "formik";

const CustFormDropDown = ({
  label,
  name,
  options,
  custPlaceholder,
  setFieldValue,
  grandAccessFn,
  publish_id,
  staff_id,
  ...rest
}) => {
  return (
    <div style={{ width: "95%" }}>
      {label && (
        <div>
          <label htmlFor={name} className="input-heading">
            {label}
          </label>
        </div>
      )}
      <Field
        as="select"
        id={name}
        name={name}
        {...rest}
        className="customDropdown-input"
        // onChange={(e) => {
        //   form.setFieldValue(name, e.target.value);
        // }}
        onChange={(e) => {
          // Use the setFieldValue passed from props
          setFieldValue(name, e.target.value);
          // Log the selected value
          // console.log(name, e.target.value);

          if (grandAccessFn && publish_id && staff_id) {
            grandAccessFn(e.target.value, publish_id, staff_id);
            setFieldValue(name, "");
          }
        }}
      >
        {custPlaceholder && (
          <option value="" disabled className="customDropdown-disabled-option">
            {custPlaceholder ? custPlaceholder : "Select dropddown"}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component="div" className="inputs-error-msg" />
    </div>
  );
};

export default CustFormDropDown;