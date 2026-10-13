
import React, { useState, useEffect } from "react";
import { Box, Radio, RadioGroup, FormControlLabel } from "@mui/material";
import { ErrorMessage } from "formik";

const PositionRadio = ({ name, value, onChange }) => {
  const [status, setStatus] = useState(value || "top");

  useEffect(() => {
    setStatus(value);
  }, [value]);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setStatus(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div>
      <label style={{ fontSize: "16px", display: "block", 
        // marginBottom: "10px"
         }}>
        Position
      </label>
      <Box>
        <RadioGroup name={name} value={status} onChange={handleChange} row>
          <FormControlLabel
            value="top"
            name={name}
            control={
              <Radio
                sx={{
                  color: "#3B4056",
                  "&.Mui-checked": { color: "#6B3C58" },
                }}
              />
            }
            label="top"
          />
          <FormControlLabel
            value="bottom"
            name={name}
            control={
              <Radio
                sx={{
                  color: "#3B4056",
                  "&.Mui-checked": { color: "#6B3C58" },
                }}
              />
            }
            label="bottom"
          />
        </RadioGroup>
      </Box>
       <ErrorMessage
        name={name}
        component="div"
        className="inputs-error-msg"
        style={{ color: "red", fontSize: "12px", fontWeight: '400' }}
      />
    </div>
  );
};

export default PositionRadio;
