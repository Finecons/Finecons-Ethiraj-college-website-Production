import { Field } from "formik";
import React from "react";
import "./CustomInputLogin.css";
import "../ComponentsCss/componet.css";

const CustomDisableGoldInput = ({ grams, name,label}) => {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ paddingBottom: "4px" }}>
        <label
          htmlFor={name}
          className="input-heading12"
          style={{ fontSize: "16px" }}
        >
          Purchase of Stake (grams)
        </label>
      </div>

      <Field
        id={name}
        name={name}
        type="text"
        className="custominput-field12"
        value={grams} // Display calculated grams
        readOnly
        style={{
          borderRadius: "3px",
          width: "100%",
          color: "#7A7A7A",
          fontSize: "14px",
          boxSizing: "border-box",
          height: "35px",
          backgroundColor: "#f2f2f2", // Disabled input style
          paddingLeft: "10px",
        }}
      />
      {/* </div> */}
    </div>
  );
};

export default CustomDisableGoldInput;
