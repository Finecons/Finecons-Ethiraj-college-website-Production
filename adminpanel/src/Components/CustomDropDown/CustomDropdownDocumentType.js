


import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import { FaStarOfLife } from "react-icons/fa6";
import "./CustomDropdownMui.css";
import "../ComponentsCss/componet.css";

const CustomDropdownDocumentType = ({
  label,
  name,
  options,
  custPlaceholder,
  selectedDocumentType,
  setSelectedDocumentType,
  setFieldValue,
  important,
  ...rest
}) => {
//   const [selectedValue, setSelectedDocumentType] = useState("");

  const handleChange = (e, form) => {
    const { value } = e.target;
    setSelectedDocumentType(value); // Update local state
    form.setFieldValue(name, value); // Update Formik state
  };

  return (
    <div style={{ width: "100%" }}>
      {label && (
        <div style={{ marginBottom: "3px" }}>
          <label
            htmlFor={name}
            className="input-heading12"
            style={{ fontSize: "16px", fontWeight: "450" }}
          >
            {label}
            {important && (
              <FaStarOfLife
                style={{ color: "#F53E5C", fontSize: "8px", marginLeft: "3px" }}
              />
            )}
          </label>
        </div>
      )}
      <Field name={name}>
        {({ field, form }) => (
          <select
            id={name}
            {...field}
            {...rest}
            className="customDropdown-input"
            style={{
              width: "100%",
              color: "#7A7A7A",
              boxSizing: "border-box",
              height:"35px"
            }}
            value={selectedDocumentType} // Bind to state
            onChange={(e) => handleChange(e, form)} // Handle change
          >
            {custPlaceholder && (
              <option
                value=""
                disabled
                className="customDropdown-disabled-option"
              >
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
      <ErrorMessage
        name={name}
        component="div"
        className="inputs-error-msg"
        style={{ color: "red", fontSize: "14px", fontWeight: "400" }}
      />
    </div>
  );
};

export default CustomDropdownDocumentType;
