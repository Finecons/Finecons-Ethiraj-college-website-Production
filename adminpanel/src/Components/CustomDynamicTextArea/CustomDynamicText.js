import React from "react";
import { FieldArray, Field, getIn, useFormikContext } from "formik";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { FiPlus } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";

const CustomDynamicText = ({ label, name, textareaHeight = 90 }) => {
  const { values, errors, touched } = useFormikContext();

  const listValues = getIn(values, name) || [];
  const listErrors = getIn(errors, name);
  const listTouched = getIn(touched, name);

  console.log(label, "labellll");

  // Extract one error only
  let singleError = "";
  if (Array.isArray(listErrors)) {
    singleError = listErrors.find((e) => e) || "";
  } else if (typeof listErrors === "string") {
    singleError = listErrors;
  }

  return (
    <FieldArray name={name}>
      {({ push, remove }) => (
        <Box>
          <Typography sx={{ fontSize: "15px", fontWeight: 500, mb: 1 }}>
            {label}
          </Typography>

          {listValues.map((_, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Field
                  name={`${name}[${index}]`}
                  type="text"
                  placeholder={`Enter ${label}`}
                  style={{
                    width: "100%",
                    height: "35px",
                    borderRadius: "6px",
                    padding: "8px",
                    border: "1px solid #ccc",
                    fontSize: "14px",
                  }}
                />

                {index > 0 && (
                  <IconButton
                    onClick={() => remove(index)}
                    sx={{ color: "red", mt: "6px" }}
                  >
                    <FaTrash size={16} />
                  </IconButton>
                )}
              </Box>
            </Box>
          ))}

          {/* SINGLE ERROR ONLY */}
          {listTouched && singleError && (
            <Typography sx={{ color: "red", fontSize: "12px", mb: 1 }}>
              {singleError}
            </Typography>
          )}

          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Button
              startIcon={<FiPlus />}
              onClick={() => push("")}
              type="button"
              sx={{
                textTransform: "none",
                fontSize: "15px",
                background: "var(--main-color)",
                color: "white",
                borderRadius: "24px",
              }}
            >
              Add {label}
            </Button>
          </Box>
        </Box>
      )}
    </FieldArray>
  );
};

export default CustomDynamicText;
