// import React from "react";
// import {
//   FormGroup,
//   FormControlLabel,
//   Checkbox,
//   Box,
//   Typography,
//   Chip,
//   Button,
// } from "@mui/material";

// export default function CustomMultipleCheckbox({
//   field,
//   form,
//   options = [],
//   maxSelections = Infinity,
//   allowSelectAll = true,
//   showChips = true,
// }) {
//   const selected = field.value || [];

//   const toggleValue = (val) => {
//     const exists = selected.includes(val);
//     let next;

//     if (exists) {
//       next = selected.filter((v) => v !== val);
//     } else {
//       if (selected.length >= maxSelections) return;
//       next = [...selected, val];
//     }

//     form.setFieldValue(field.name, next);
//   };

//   const selectAll = () => {
//     const enabled = options.filter((o) => !o.disabled).map((o) => o.value);
//     form.setFieldValue(field.name, enabled.slice(0, maxSelections));
//   };

//   const clearAll = () => {
//     form.setFieldValue(field.name, []);
//   };

//   return (
//     <Box>
//       {/* Top Controls */}
//       <Box display="flex" alignItems="center" mb={2} gap={1}>
//         {allowSelectAll && (
//           <>
//             <Button variant="outlined" size="small" onClick={selectAll}>
//               Select All
//             </Button>
//             <Button variant="outlined" size="small" onClick={clearAll}>
//               Clear
//             </Button>
//           </>
//         )}

//         <Typography ml="auto" variant="body2" color="text.secondary">
//           {selected.length} / {Math.min(maxSelections, options.length)} selected
//         </Typography>
//       </Box>

//       {/* Checkboxes */}
//       <FormGroup>
//         {options.map((opt) => (
//           <FormControlLabel
//             key={opt.value}
//             control={
//               <Checkbox
//                 checked={selected.includes(opt.value)}
//                 disabled={opt.disabled}
//                 onChange={() => toggleValue(opt.value)}
//               />
//             }
//             label={opt.label}
//           />
//         ))}
//       </FormGroup>

//       {/* Selected Chips */}
//       {showChips && selected.length > 0 && (
//         <Box mt={2} display="flex" flexWrap="wrap" gap={1}>
//           {selected.map((val) => {
//             const meta = options.find((o) => o.value === val);
//             return (
//               <Chip
//                 key={val}
//                 label={meta?.label || val}
//                 onDelete={() => toggleValue(val)}
//               />
//             );
//           })}
//         </Box>
//       )}
//     </Box>
//   );
// }


import React from "react";
import { Field, ErrorMessage } from "formik";
import { Checkbox, FormControlLabel, FormGroup, Typography, Box } from "@mui/material";
import { FaStarOfLife } from "react-icons/fa6";

const CustomMultipleCheckbox = ({
  label,
  name,
  options = [],
  important,
  maxSelections = Infinity,
  ...rest
}) => {
  return (
    <div style={{ width: "100%" }}>
      {/* Label */}
      <Typography
        variant="body1"
        style={{ fontSize: "15px", fontWeight: "450", marginBottom: "5px" }}
      >
        {label}
        {important && (
          <FaStarOfLife
            style={{ color: "#F53E5C", fontSize: "8px", marginLeft: "3px" }}
          />
        )}
      </Typography>

      {/* Field */}
      <Field name={name}>
        {({ field, form }) => {
          const selected = field.value || [];

          const toggleValue = (val) => {
            let next;
            if (selected.includes(val)) {
              next = selected.filter((v) => v !== val);
            } else {
              if (selected.length >= maxSelections) return;
              next = [...selected, val];
            }
            form.setFieldValue(name, next);
          };

          return (
            <Box>
              {/* Checkbox List */}
              <FormGroup>
                {options.map((opt) => (
                  <FormControlLabel
                    key={opt.value}
                    control={
                      <Checkbox
                        checked={selected.includes(opt.value)}
                        onChange={() => toggleValue(opt.value)}
                        disabled={opt.disabled}
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 20 } }}
                      />
                    }
                    label={opt.label}
                    style={{ marginLeft: "-8px" }} // align with text fields
                  />
                ))}
              </FormGroup>
            </Box>
          );
        }}
      </Field>

      {/* Error Message */}
      <ErrorMessage
        name={name}
        component="div"
        className="inputs-error-msg"
        style={{ color: "red", fontSize: "12px", fontWeight: "400" }}
      />
    </div>
  );
};

export default CustomMultipleCheckbox;
