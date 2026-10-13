// CustomDropdownMui.js
import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./CustomDropdownMui.css";
import "../ComponentsCss/componet.css";
import { InputLabel } from "@mui/material";
import { Field, ErrorMessage } from "formik";

const CustomDropdownMui = ({
  label,
  name,
  options,
  custPlaceholder,
  setFieldValue,
  selectmovieIdfn,
  selectCategoryIdfn,
  onChange,
  assignOpreatorToCustomerFn,
  setAcademicId,
  resetDepartmentName,
  customerId,
  ...rest
}) => {
  console.log(options, "options122121")
  return (
    <div style={{ width: "100%" }}>
      {label && (
        <div>
          <label htmlFor={name} className="input-heading12" style={{ fontSize: "16px", fontWeight: "400" }}
          >
            {label}
          </label>
        </div>
      )}
      {/* <Field
        as="select"
        id={name}
        name={name}
      
        {...rest}
        className="customDropdown-input"

      > */}
      <Field name={name}>
        {({ field, form }) => (
          <select
            id={name}
            {...field}
            {...rest}
            value={field.value || ""}
            className="customDropdown-input"
            onChange={(e) => {
              const selectedValue = e.target.value;
              form.setFieldValue(name, selectedValue);  // Update Formik field value

              if(assignOpreatorToCustomerFn){
                assignOpreatorToCustomerFn(customerId,e.target.value)
                form.setFieldValue(name, '');
              }
               if(setAcademicId){
                setAcademicId(selectedValue)
                form.setFieldValue(resetDepartmentName, '');
              }
              if (onChange) onChange(e);                // Call custom onChange handler if provided

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
          </select>
        )}
      </Field>
       <ErrorMessage
                name={name}
                component="div"
                className="inputs-error-msg"
                style={{ color: "red", fontSize: "12px", fontWeight: '400' }}
      />
    </div>
  );
};

export default CustomDropdownMui;
