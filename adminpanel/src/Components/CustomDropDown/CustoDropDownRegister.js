

import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./CustomDropdownMui.css";
import "../ComponentsCss/componet.css";
import { InputAdornment, InputLabel } from "@mui/material";
import { Field, ErrorMessage } from "formik";
import { Email } from "@mui/icons-material";
import { FaStarOfLife } from "react-icons/fa6";

const CustoDropDownRegister = ({
  label,
  name,
  options,
  custPlaceholder,
  setFieldValue,
  selectmovieIdfn,
  selectCategoryIdfn,
  important,
  onChange,
  assignOpreatorToCustomerFn,
  customerId,
  image,
  ...rest
}) => {
  return (
    <div style={{ width: "100%" }}>
      {label && (
        <div style={{ marginBottom: "3px" }}>
          <label htmlFor={name} className="input-heading12" style={{ fontSize: "16px", fontWeight: "450" }}>
            {label}{important && (
              <FaStarOfLife style={{ color: '#F53E5C', fontSize: "8px", marginLeft: "3px" }} />
            )}
          </label>
        </div>
      )}
      {/* Wrapper for icon and dropdown */}

      {/* Dropdown Field */}
      <Field name={name}
       

      >
        {({ field, form }) => (
          <select
            id={name}
            {...field}
            {...rest}
            className="customDropdown-input"
            style={{
              borderRadius: "3px",
              width: "100%",
              color: "#7A7A7A",
              height:"35px",
              // paddingLeft: "40px", // Add padding to avoid overlapping with the icon
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

      <ErrorMessage name={name} component="div" className="inputs-error-msg"
        style={{ color: "red", fontSize: "11px", fontWeight: '400' }}
      />
    </div>
  );
};

export default CustoDropDownRegister;
