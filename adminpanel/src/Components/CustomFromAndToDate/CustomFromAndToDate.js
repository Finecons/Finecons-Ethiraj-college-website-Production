import React from "react";
import { Field, ErrorMessage, useFormikContext } from "formik";
import "../CustomInputLogin/CustomInputLogin.css";

const CustomFromAndToDate = () => {
  const { values, setFieldValue } = useFormikContext();

  // Determine dynamic min and max dates based on selections
  const fromDateMax = values.toDate || undefined;
  const toDateMin = values.fromDate || undefined;

  // Handle changes for `fromDate`
  const handleFromDateChange = (e) => {
    const selectedDate = e.target.value;
    setFieldValue("fromDate", selectedDate);

    // Clear `toDate` if it’s before the newly selected `fromDate`
    if (values.toDate && new Date(values.toDate) < new Date(selectedDate)) {
      setFieldValue("toDate", "");
    }
  };

  // Handle changes for `toDate`
  const handleToDateChange = (e) => {
    const selectedDate = e.target.value;
    setFieldValue("toDate", selectedDate);

    // Clear `fromDate` if it’s after the newly selected `toDate`
    if (values.fromDate && new Date(selectedDate) < new Date(values.fromDate)) {
      setFieldValue("fromDate", "");
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "flex", gap: "15px" }}>
        <div style={{ flex: 1 }}>
          <label
            htmlFor="fromDate"
            className="input-heading12"
            style={{ fontSize: "16px", fontWeight: "700", display: "block" }}
          >
            From Date
          </label>
          <Field
            id="fromDate"
            name="fromDate"
            type="date"
            max={fromDateMax} // Limit up to selected `toDate`
            onChange={handleFromDateChange}
            style={{ width: "100%", padding: "8px", fontSize: "16px" }}
            className="custominput-field12"
          />
          <ErrorMessage
            name="fromDate"
            component="div"
            className="inputs-error-msg"
            style={{ color: "red" }}
          />
        </div>

        <div style={{ flex: 1 }}>
          <label
            htmlFor="toDate"
            className="input-heading12"
            style={{ fontSize: "16px", fontWeight: "700", display: "block" }}
          >
            To Date
          </label>
          <Field
            id="toDate"
            name="toDate"
            type="date"
            min={toDateMin} // Start from selected `fromDate`
            onChange={handleToDateChange}
            style={{ width: "100%", padding: "8px", fontSize: "16px" }}
            className="custominput-field12"
          />
          <ErrorMessage
            name="toDate"
            component="div"
            className="inputs-error-msg"
            style={{ color: "red" }}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomFromAndToDate;
