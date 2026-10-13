

import React from "react";
import { Field, ErrorMessage } from "formik";
import { FaStarOfLife } from "react-icons/fa6";

const CustomUserRegisterDropdown = ({
  label,
  name,
  options,
  custPlaceholder,
  important,
  onChange,
  ...rest
}) => {
  return (
    <div style={{ width: "100%" }}>
      {label && (
        <div style={{ marginBottom: "4px" }}>
          <label htmlFor={name} className="input-heading12" style={{ fontSize: "16px", fontWeight: "450" }}>
            {label}{important && (
              <FaStarOfLife style={{ color: '#F53E5C', fontSize: "8px", marginLeft: "3px" }} />
            )}
          </label>
        </div>
      )}
      {/* Wrapper for icon and dropdown */}

      {/* Dropdown Field */}
      <Field name={name}>
        {({ field, form }) => (
          <select
            id={name}
            {...field}
            {...rest}
            // onChange={(e) => {
            //   form.setFieldValue(name, e.target.value); // Update Formik state
            //   if (rest.onChange) rest.onChange(e); // Call custom onChange if provided
            // }}

            onChange={(e) => {
              const selectedValue = e.target.value;
              const selectedOption = options.find(option => option.value === selectedValue);
              const selectedId = selectedOption ? selectedOption.id : null;

              form.setFieldValue(name, selectedValue); // Update Formik state

              if (onChange) {
                onChange(selectedValue, selectedId); // Send value and ID to parent
              }
            }}
            className="customDropdown-input"
            style={{
              borderRadius: "3px",
              width: "100%",
              height: "35px",

              color: "#7A7A7A",
              boxSizing: "border-box",
            }}
          >
            {custPlaceholder && (
              <option value="" disabled className="customDropdown-disabled-option">
                {custPlaceholder ? custPlaceholder : "Select dropdown"}
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

      {/* Error message for the individual field */}
      <ErrorMessage name={name} component="div" className="inputs-error-msg"
        style={{ color: "red", fontSize: "12px", fontWeight: '400' }}
      />
    </div>
  );
};

export default CustomUserRegisterDropdown;

