// // // // // import React from "react";
// // // // // import { Field, FieldArray, ErrorMessage } from "formik";
// // // // // import { IconButton, Typography, Box, Button } from "@mui/material";
// // // // // import { FaTrash, FaPlus } from "react-icons/fa";
// // // // // import { FiPlus } from "react-icons/fi";

// // // // // const CustomDynamicTextArea = ({ label, name }) => {
// // // // //   return (
// // // // //     <FieldArray name={name}>
// // // // //       {({ push, remove, form }) => {
// // // // //         const values = form.values[name] || [];
// // // // //         console.log(form.values[name],"vsjfjalues")
// // // // //         console.log(form.values,"vsjfjalues22")

// // // // //         console.log(name,"vsjfjalues11")

// // // // //         return (
// // // // //           <Box sx={{ width: "100%" }}>
// // // // //             <Typography sx={{ fontSize: "15px", fontWeight: 500, mb: 1 }}>
// // // // //               {label}
// // // // //             </Typography>

// // // // //             {values.map((_, index) => (
// // // // //               <Box
// // // // //                 key={index}
// // // // //                 sx={{
// // // // //                   display: "flex",
// // // // //                   alignItems: "center",
// // // // //                   gap: 1,
// // // // //                   mb: 2,
// // // // //                   //   border: "1px solid #ddd",
// // // // //                   borderRadius: "6px",
// // // // //                   //   padding: "10px",
// // // // //                 }}
// // // // //               >
// // // // //                 <Field
// // // // //                   as="textarea"
// // // // //                   name={`${name}[${index}]`}
// // // // //                 //  name={`${name}.${index}`}
// // // // //                   placeholder="Enter About Department"
// // // // //                   style={{
// // // // //                     width: "100%",
// // // // //                     height: "100px",
// // // // //                     borderRadius: "6px",
// // // // //                     padding: "8px",
// // // // //                     border: "1px solid #ccc",
// // // // //                     resize: "none",
// // // // //                   }}
// // // // //                 />

// // // // //                 {index > 0 && (
// // // // //                   <IconButton
// // // // //                     onClick={() => remove(index)}
// // // // //                     sx={{
// // // // //                       color: "red",
// // // // //                       "&:hover": { background: "rgba(255,0,0,0.1)" },
// // // // //                     }}
// // // // //                   >
// // // // //                     <FaTrash size={16} />
// // // // //                   </IconButton>
// // // // //                 )}
// // // // //               </Box>
// // // // //             ))}
// // // // //             <Box sx={{ display: "flex", justifyContent: "end" }}>
// // // // //               <Button
// // // // //                 startIcon={<FiPlus />}
// // // // //                 onClick={() => push("")}
// // // // //                 sx={{
// // // // //                   textTransform: "none",
// // // // //                   fontSize: "15px",
// // // // //                   fontWeight: 500,
// // // // //                   background: "var(--main-color)",
// // // // //                   color: "white",
// // // // //                   borderRadius: "24px",
// // // // //                   p: "10px 20px",
// // // // //                   "&:hover": { background: "var(--main-color)" },
// // // // //                 }}
// // // // //               >
// // // // //                 Add Field
// // // // //               </Button>
// // // // //             </Box>

// // // // //             <ErrorMessage
// // // // //               name={name}
// // // // //               component="div"
// // // // //               style={{ color: "red", fontSize: "12px", marginTop: "5px" }}
// // // // //             />
// // // // //           </Box>
// // // // //         );
// // // // //       }}
// // // // //     </FieldArray>
// // // // //   );
// // // // // };

// // // // // export default CustomDynamicTextArea;
// // // // import React from "react";
// // // // import { Field, FieldArray, ErrorMessage } from "formik";
// // // // import { IconButton, Typography, Box, Button } from "@mui/material";
// // // // import { FaTrash } from "react-icons/fa";
// // // // import { FiPlus } from "react-icons/fi";

// // // // const CustomDynamicTextArea = ({ label, name, maxItems = 5, textareaHeight = 90 }) => {
// // // //   return (
// // // //     <FieldArray name={name}>
// // // //       {({ push, remove, form }) => {
// // // //         const values = form.values[name] || [];

// // // //         return (
// // // //           <Box sx={{ width: "100%" }}>
// // // //             <Typography sx={{ fontSize: "15px", fontWeight: 500, mb: 1 }}>
// // // //               {label}
// // // //             </Typography>

// // // //             {values.map((_, index) => (
// // // //               <Box
// // // //                 key={index}
// // // //                 sx={{
// // // //                   display: "flex",
// // // //                   alignItems: "flex-start",
// // // //                   gap: 1,
// // // //                   mb: 2,
// // // //                   borderRadius: "6px",
// // // //                 }}
// // // //               >
// // // //                 <Field
// // // //                   as="textarea"
// // // //                   name={`${name}[${index}]`}
// // // //                   placeholder={`Enter ${label}`}
// // // //                   style={{
// // // //                     width: "100%",
// // // //                     height: `${textareaHeight}px`,
// // // //                     borderRadius: "6px",
// // // //                     padding: "8px",
// // // //                     border: "1px solid #ccc",
// // // //                     resize: "vertical",
// // // //                     fontFamily: "inherit",
// // // //                     fontSize: "14px",
// // // //                   }}
// // // //                 />

// // // //                 {/* Show delete only when there is more than 1 item (min 1) */}
// // // //                 {values.length > 1 && (
// // // //                   <IconButton
// // // //                     onClick={() => remove(index)}
// // // //                     sx={{
// // // //                       color: "red",
// // // //                       mt: "6px",
// // // //                       "&:hover": { background: "rgba(255,0,0,0.08)" },
// // // //                     }}
// // // //                     aria-label={`Remove ${label}`}
// // // //                     size="large"
// // // //                   >
// // // //                     <FaTrash size={16} />
// // // //                   </IconButton>
// // // //                 )}
// // // //               </Box>
// // // //             ))}

// // // //             <Box sx={{ display: "flex", justifyContent: "end" }}>
// // // //               <Button
// // // //                 startIcon={<FiPlus />}
// // // //                 onClick={() => {
// // // //                   if (values.length < maxItems) push("");
// // // //                 }}
// // // //                 disabled={values.length >= maxItems}
// // // //                 sx={{
// // // //                   textTransform: "none",
// // // //                   fontSize: "15px",
// // // //                   fontWeight: 500,
// // // //                   background: "var(--main-color)",
// // // //                   color: "white",
// // // //                   borderRadius: "24px",
// // // //                   p: "8px 16px",
// // // //                   "&:hover": { background: "var(--main-color)" },
// // // //                 }}
// // // //                 aria-label={`Add ${label}`}
// // // //                 type="button"
// // // //               >
// // // //                 Add {label}
// // // //               </Button>
// // // //             </Box>

// // // //             <ErrorMessage
// // // //               name={name}
// // // //               component="div"
// // // //               style={{ color: "red", fontSize: "12px", marginTop: "5px" }}
// // // //             />
// // // //           </Box>
// // // //         );
// // // //       }}
// // // //     </FieldArray>
// // // //   );
// // // // };

// // // // export default CustomDynamicTextArea;

// // // // // CustomDynamicTextArea.jsx
// // // // import React from "react";
// // // // import { Field, FieldArray, ErrorMessage, getIn } from "formik";
// // // // import { IconButton, Typography, Box, Button } from "@mui/material";
// // // // import { FaTrash } from "react-icons/fa";
// // // // import { FiPlus } from "react-icons/fi";

// // // // /**
// // // //  * name: a Formik path string, e.g. "about_department" OR "cards.0.resource_person"
// // // //  */
// // // // const CustomDynamicTextArea = ({ label, name, maxItems = 5, textareaHeight = 90 }) => {
// // // //   return (
// // // //     <FieldArray name={name}>
// // // //       {({ push, remove, form }) => {
// // // //         // Use getIn to resolve nested paths safely
// // // //         const values = getIn(form.values, name) || [];

// // // //         return (
// // // //           <Box sx={{ width: "100%" }}>
// // // //             <Typography sx={{ fontSize: "15px", fontWeight: 500, mb: 1 }}>
// // // //               {label}
// // // //             </Typography>

// // // //             {values.map((_, idx) => (
// // // //               <Box
// // // //                 key={idx}
// // // //                 sx={{
// // // //                   display: "flex",
// // // //                   alignItems: "flex-start",
// // // //                   gap: 1,
// // // //                   mb: 2,
// // // //                   borderRadius: "6px",
// // // //                 }}
// // // //               >
// // // //                 {/* Use bracket notation to reference the array element */}
// // // //                 <Field
// // // //                   as="textarea"
// // // //                   name={`${name}[${idx}]`}
// // // //                   placeholder={`Enter ${label}`}
// // // //                   style={{
// // // //                     width: "100%",
// // // //                     height: `${textareaHeight}px`,
// // // //                     borderRadius: "6px",
// // // //                     padding: "8px",
// // // //                     border: "1px solid #ccc",
// // // //                     resize: "vertical",
// // // //                     fontFamily: "inherit",
// // // //                     fontSize: "14px",
// // // //                   }}
// // // //                 />

// // // //                 {values.length > 1 && (
// // // //                   <IconButton
// // // //                     onClick={() => remove(idx)}
// // // //                     sx={{
// // // //                       color: "red",
// // // //                       mt: "6px",
// // // //                       "&:hover": { background: "rgba(255,0,0,0.08)" },
// // // //                     }}
// // // //                     aria-label={`Remove ${label}`}
// // // //                     size="large"
// // // //                     type="button"
// // // //                   >
// // // //                     <FaTrash size={16} />
// // // //                   </IconButton>
// // // //                 )}
// // // //               </Box>
// // // //             ))}

// // // //             <Box sx={{ display: "flex", justifyContent: "end" }}>
// // // //               <Button
// // // //                 startIcon={<FiPlus />}
// // // //                 onClick={() => {
// // // //                   if (values.length < maxItems) push("");
// // // //                 }}
// // // //                 disabled={values.length >= maxItems}
// // // //                 sx={{
// // // //                   textTransform: "none",
// // // //                   fontSize: "15px",
// // // //                   fontWeight: 500,
// // // //                   background: "var(--main-color)",
// // // //                   color: "white",
// // // //                   borderRadius: "24px",
// // // //                   p: "8px 16px",
// // // //                   "&:hover": { background: "var(--main-color)" },
// // // //                 }}
// // // //                 aria-label={`Add ${label}`}
// // // //                 type="button"
// // // //               >
// // // //                 Add {label}
// // // //               </Button>
// // // //             </Box>

// // // //             <ErrorMessage
// // // //               name={name}
// // // //               component="div"
// // // //               style={{ color: "red", fontSize: "12px", marginTop: "5px" }}
// // // //             />
// // // //           </Box>
// // // //         );
// // // //       }}
// // // //     </FieldArray>
// // // //   );
// // // // };

// // // // export default CustomDynamicTextArea;

// // // // CustomDynamicTextArea.jsx
// // // import React from "react";
// // // import { Field, FieldArray, ErrorMessage, getIn } from "formik";
// // // import { IconButton, Typography, Box, Button } from "@mui/material";
// // // import { FaTrash } from "react-icons/fa";
// // // import { FiPlus } from "react-icons/fi";

// // // /**
// // //  * name: a Formik path string, e.g. "about_department" OR "cards.0.resource_person"
// // //  */
// // // const CustomDynamicTextArea = ({
// // //   label,
// // //   name,
// // //   maxItems = 5,
// // //   textareaHeight = 90,
// // // }) => {
// // //   return (
// // //     <FieldArray name={name}>
// // //       {({ push, remove, form }) => {
// // //         // Use getIn to read nested paths (works for cards.X.resource_person)
// // //         const values = getIn(form.values, name) || [];

// // //         return (
// // //           <Box sx={{ width: "100%" }}>
// // //             <Typography sx={{ fontSize: "15px", fontWeight: 500, mb: 1 }}>
// // //               {label}
// // //             </Typography>

// // //             {values.map((_, idx) => (
// // //               <>
// // //                 <Box
// // //                   key={idx}
// // //                   sx={{
// // //                     display: "flex",
// // //                     alignItems: "flex-start",
// // //                     gap: 1,
// // //                     mb: 2,
// // //                     borderRadius: "6px",
// // //                   }}
// // //                 >
// // //                   <Field
// // //                     as="textarea"
// // //                     name={`${name}[${idx}]`}
// // //                     placeholder={`Enter ${label}`}
// // //                     style={{
// // //                       width: "100%",
// // //                       height: `${textareaHeight}px`,
// // //                       borderRadius: "6px",
// // //                       padding: "8px",
// // //                       border: "1px solid #ccc",
// // //                       resize: "vertical",
// // //                       fontFamily: "inherit",
// // //                       fontSize: "14px",
// // //                     }}
// // //                   />

// // //                   {/* ✅ Do NOT allow deleting the first item */}
// // //                   {idx > 0 && (
// // //                     <IconButton
// // //                       onClick={() => remove(idx)}
// // //                       sx={{
// // //                         color: "red",
// // //                         mt: "6px",
// // //                         "&:hover": { background: "rgba(255,0,0,0.08)" },
// // //                       }}
// // //                       aria-label={`Remove ${label}`}
// // //                       size="large"
// // //                       type="button"
// // //                     >
// // //                       <FaTrash size={16} />
// // //                     </IconButton>
// // //                   )}
// // //                 </Box>
// // //                 <ErrorMessage
// // //                   name={name}
// // //                   component="div"
// // //                   style={{ color: "red", fontSize: "12px", marginTop: "5px" }}
// // //                 />
// // //               </>
// // //             ))}

// // //             <Box sx={{ display: "flex", justifyContent: "end" }}>
// // //               <Button
// // //                 startIcon={<FiPlus />}
// // //                 onClick={() => {
// // //                   //   if (values.length < maxItems)
// // //                   push("");
// // //                 }}
// // //                 // disabled={values.length >= maxItems}
// // //                 sx={{
// // //                   textTransform: "none",
// // //                   fontSize: "15px",
// // //                   fontWeight: 500,
// // //                   background: "var(--main-color)",
// // //                   color: "white",
// // //                   borderRadius: "24px",
// // //                   p: "8px 16px",
// // //                   "&:hover": { background: "var(--main-color)" },
// // //                 }}
// // //                 aria-label={`Add ${label}`}
// // //                 type="button"
// // //               >
// // //                 Add {label}
// // //               </Button>
// // //             </Box>
// // //           </Box>
// // //         );
// // //       }}
// // //     </FieldArray>
// // //   );
// // // };

// // // export default CustomDynamicTextArea;
// // import React from "react";
// // import { FieldArray, Field, getIn } from "formik";
// // import { Box, Typography, Button, IconButton } from "@mui/material";
// // import { FiPlus } from "react-icons/fi";
// // import { FaTrash } from "react-icons/fa";

// // const CustomDynamicTextArea = ({ label, name, form, textareaHeight = 90 }) => {
// //   const values = getIn(form?.values, name) || [];
// //   const errors = getIn(form.errors, name);
// //   const touched = getIn(form.touched, name);

// //   // Extract only ONE error (first non-empty error)
// //   let singleError = "";
// //   if (Array.isArray(errors)) {
// //     singleError = errors.find((e) => e) || "";
// //   } else if (typeof errors === "string") {
// //     singleError = errors;
// //   }

// //   return (
// //     <FieldArray name={name}>
// //       {({ push, remove }) => (
// //         <Box sx={{ width: "100%" }}>
// //           <Typography sx={{ fontSize: "15px", fontWeight: 500, mb: 1 }}>
// //             {label}
// //           </Typography>

// //           {values?.map((_, idx) => (
// //             <Box key={idx} sx={{ mb: 2 }}>
// //               <Box
// //                 sx={{
// //                   display: "flex",
// //                   alignItems: "flex-start",
// //                   gap: 1,
// //                 }}
// //               >
// //                 <Field
// //                   as="textarea"
// //                   name={`${name}[${idx}]`}
// //                   placeholder={`Enter ${label}`}
// //                   style={{
// //                     width: "100%",
// //                     height: `${textareaHeight}px`,
// //                     borderRadius: "6px",
// //                     padding: "8px",
// //                     border: "1px solid #ccc",
// //                     fontSize: "14px",
// //                   }}
// //                 />

// //                 {idx > 0 && (
// //                   <IconButton
// //                     onClick={() => remove(idx)}
// //                     sx={{ color: "red", mt: "6px" }}
// //                     type="button"
// //                   >
// //                     <FaTrash size={16} />
// //                   </IconButton>
// //                 )}
// //               </Box>
// //             </Box>
// //           ))}

// //           {/* 🔥 Show only ONE error */}
// //           {touched && singleError && (
// //             <Typography sx={{ color: "red", fontSize: "12px", mb: 1 }}>
// //               {singleError}
// //             </Typography>
// //           )}

// //           <Box sx={{ display: "flex", justifyContent: "end" }}>
// //             <Button
// //               startIcon={<FiPlus />}
// //               onClick={() => push("")}
// //               type="button"
// //               sx={{
// //                 textTransform: "none",
// //                 fontSize: "15px",
// //                 background: "var(--main-color)",
// //                 color: "white",
// //                 borderRadius: "24px",
// //                 px: 2,
// //               }}
// //             >
// //               Add {label}
// //             </Button>
// //           </Box>
// //         </Box>
// //       )}
// //     </FieldArray>
// //   );
// // };

// // export default CustomDynamicTextArea;
// import React from "react";
// import { FieldArray, Field, getIn } from "formik";
// import { Box, Typography, Button, IconButton } from "@mui/material";
// import { FiPlus } from "react-icons/fi";
// import { FaTrash } from "react-icons/fa";

// const CustomDynamicTextArea = ({
//   label,
//   name,
//   form,
//   textareaHeight = 90,
// }) => {
//   const values = getIn(form?.values, name) || [];
//   const errors = getIn(form?.errors, name);
//   const touched = getIn(form?.touched, name);

//   // Extract one error only
//   let singleError = "";
//   if (Array.isArray(errors)) {
//     singleError = errors.find((e) => e) || "";
//   } else if (typeof errors === "string") {
//     singleError = errors;
//   }

//   return (
//     <FieldArray name={name}>
//       {({ push, remove }) => (
//         <Box sx={{ width: "100%" }}>
//           <Typography sx={{ fontSize: "15px", fontWeight: 500, mb: 1 }}>
//             {label}
//           </Typography>

//           {values?.map((_, idx) => (
//             <Box key={idx} sx={{ mb: 2 }}>
//               <Box sx={{ display: "flex", gap: 1 }}>
//                 <Field
//                   as="textarea"
//                   name={`${name}[${idx}]`}
//                   placeholder={`Enter ${label}`}
//                   style={{
//                     width: "100%",
//                     height: `${textareaHeight}px`,
//                     padding: "8px",
//                     borderRadius: "6px",
//                     border: "1px solid #ccc",
//                   }}
//                 />

//                 {idx > 0 && (
//                   <IconButton
//                     onClick={() => remove(idx)}
//                     sx={{ color: "red", mt: "6px" }}
//                     type="button"
//                   >
//                     <FaTrash size={16} />
//                   </IconButton>
//                 )}
//               </Box>
//             </Box>
//           ))}

//           {/* 🔥 Single error only */}
//           {touched && singleError && (
//             <Typography sx={{ color: "red", fontSize: "12px" }}>
//               {singleError}
//             </Typography>
//           )}

//           <Box sx={{ display: "flex", justifyContent: "end" }}>
//             <Button
//               startIcon={<FiPlus />}
//               onClick={() => push("")}
//               sx={{
//                 background: "var(--main-color)",
//                 color: "white",
//                 borderRadius: "24px",
//                 px: 2,
//               }}
//               type="button"
//             >
//               Add {label}
//             </Button>
//           </Box>
//         </Box>
//       )}
//     </FieldArray>
//   );
// };

// export default CustomDynamicTextArea;

import React from "react";
import { FieldArray, Field, getIn, useFormikContext } from "formik";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { FiPlus } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";

const CustomDynamicTextArea = ({ label, name, textareaHeight = 90 }) => {
  const { values, errors, touched } = useFormikContext();

  const listValues = getIn(values, name) || [];
  const listErrors = getIn(errors, name);
  const listTouched = getIn(touched, name);

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
                  as="textarea"
                  name={`${name}[${index}]`}
                  placeholder={`Enter ${label}`}
                  style={{
                    width: "100%",
                    height: `${textareaHeight}px`,
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

export default CustomDynamicTextArea;
