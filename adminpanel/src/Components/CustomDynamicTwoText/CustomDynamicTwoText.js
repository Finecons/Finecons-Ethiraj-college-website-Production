import React from "react";
import { FieldArray, Field, getIn, useFormikContext } from "formik";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { FiPlus } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";

const CustomDynamicTwoText = ({
  label,
  name,
  leftLabel = "Left",
  rightLabel = "Right",
  maxItems = 10,
}) => {
  const { values, errors, touched } = useFormikContext();

  const listValues = getIn(values, name) || [];
  const listErrors = getIn(errors, name);
  const listTouched = getIn(touched, name);

  return (
    <FieldArray name={name}>
      {({ push, remove }) => (
        <Box>
          <Typography sx={{ fontSize: "15px", fontWeight: 500, mb: 1 }}>
            {label}
          </Typography>

          {listValues.map((_, index) => {
            const leftError = getIn(listErrors, `${index}.left`);
            const rightError = getIn(listErrors, `${index}.right`);
            const showError =
              getIn(listTouched, `${index}.left`) &&
              (leftError || rightError);

            return (
              <Box key={index} sx={{ mb: 2 }}>
                {/* Two Text Fields in Row */}
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Field
                    name={`${name}[${index}].left`}
                    placeholder={leftLabel}
                    style={{
                      width: "100%",
                      height: "45px",
                      borderRadius: "6px",
                      padding: "8px",
                      border: "1px solid #ccc",
                      fontSize: "14px",
                    }}
                  />

                  <Field
                    name={`${name}[${index}].right`}
                    placeholder={rightLabel}
                    style={{
                      width: "100%",
                      height: "45px",
                      borderRadius: "6px",
                      padding: "8px",
                      border: "1px solid #ccc",
                      fontSize: "14px",
                    }}
                  />

                  {index > 0 && (
                    <IconButton
                      onClick={() => remove(index)}
                      sx={{ color: "red", mt: "2px" }}
                    >
                      <FaTrash size={16} />
                    </IconButton>
                  )}
                </Box>

                {/* Show Row Error */}
                {showError && (
                  <Typography sx={{ color: "red", fontSize: "12px", mt: 1 }}>
                    {leftError || rightError}
                  </Typography>
                )}
              </Box>
            );
          })}

          {/* Add Button */}
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Button
              startIcon={<FiPlus />}
              onClick={() => push({ left: "", right: "" })}
              type="button"
              disabled={listValues.length >= maxItems}
              sx={{
                textTransform: "none",
                fontSize: "15px",
                background: "var(--main-color)",
                color: "white",
                borderRadius: "24px",
              }}
            >
              Add 
              
              {/* {label} */}
            </Button>
          </Box>
        </Box>
      )}
    </FieldArray>
  );
};

export default CustomDynamicTwoText;
