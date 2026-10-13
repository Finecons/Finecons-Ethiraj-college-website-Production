


// import React, { useState } from "react";
// import "../CustomInputLogin/CustomInputLogin.css";
// import "../ComponentsCss/componet.css";
// import { Field, ErrorMessage } from "formik";
// import { InputAdornment, Typography, Button, IconButton } from "@mui/material";
// import { FaStarOfLife, FaPlus, FaTimes } from "react-icons/fa";

// const CustomAddCountryInput = ({ label, name, custPlaceholder, important, inputType, ...rest }) => {
//   const [inputValue, setInputValue] = useState("");
//   const [values, setValues] = useState([]);

//   console.log(values,"useStateValues")
//   console.log(inputValue,"useStateValues111")
//   const handleAdd = () => {
//     if (inputValue.trim() !== "") {
//       setValues([...values, inputValue]);
//       setInputValue(""); // Clear input after adding
//     }
//   };

//   const handleDelete = (index) => {
//     setValues(values.filter((_, i) => i !== index));
//   };

//   const handleSubmit = () => {
//     console.log("Submitted values:", values);
//   };

//   return (
//     <div style={{ width: "100%" }}>
//       <div style={{ width: "100%" }}>
//         <div style={{ marginBottom: "5px" }}>
//           <Typography variant="body1">
//             <label
//               htmlFor={name}
//               className="input-heading12"
//               style={{ fontSize: "15px", fontWeight: "450" }}
//             >
//               {label}
//             </label>
//             {important && <FaStarOfLife style={{ color: "#F53E5C", fontSize: "8px", marginLeft: "3px" }} />}
//           </Typography>
//         </div>
//         <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//           {/* Input Field */}
//           <Field
//             id={name}
//             type={inputType !== "textarea" ? inputType : "text"}
//             name={name}
//             as={inputType === "textarea" ? "textarea" : "input"}
//             placeholder={custPlaceholder || "Enter Input"}
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             {...rest}
//             style={{
//               flex: 1,
//               borderRadius: "3px",
//               boxSizing: "border-box",
//               height: inputType === "textarea" ? "100px" : "35px",
//               paddingLeft: "10px",
//             }}
//             className="custominput-field12"
//           />
//           {/* Add Button */}
//           <Button variant="contained" color="primary" onClick={handleAdd} style={{ minWidth: "40px", height: "35px" }}>
//             <FaPlus />
//           </Button>
//         </div>

//         {/* Display Added Values */}
//         <div style={{ marginTop: "10px" }}>
//           {values.map((item, index) => (
//             <div key={index} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "5px" }}>
//               <Typography variant="body2" style={{ flex: 1, background: "#f0f0f0", padding: "5px", borderRadius: "3px" }}>
//                 {item}
//               </Typography>
//               <IconButton size="small" onClick={() => handleDelete(index)} style={{ color: "red" }}>
//                 <FaTimes />
//               </IconButton>
//             </div>
//           ))}
//         </div>

//         {/* Submit Button */}
//         {/* <Button variant="contained" color="success" onClick={handleSubmit} style={{ marginTop: "10px" }}>
//           Submit
//         </Button> */}

//         <ErrorMessage name={name} component="div" className="inputs-error-msg" style={{ color: "red", fontSize: "12px", fontWeight: "400" }} />
//       </div>
//     </div>
//   );
// };

// export default CustomAddCountryInput;

  import React, { useState, useEffect } from "react";
  import { Field, ErrorMessage } from "formik";
  import { Typography, Button, IconButton, Box } from "@mui/material";
  import { FaStarOfLife, FaPlus, FaTimes } from "react-icons/fa";

  const CustomAddCountryInput = ({ label, name, custPlaceholder,inputValue, setInputValue,localValues, setLocalValues, important, inputType, setFieldValue, values, ...rest }) => {
    // const [inputValue, setInputValue] = useState("");
    // const [localValues, setLocalValues] = useState(values || []);

    useEffect(() => {
      setFieldValue(name, localValues);
    }, [localValues, name, setFieldValue]);

    const handleAdd = () => {
      if (inputValue.trim() !== "") {
        const updatedValues = [...localValues, inputValue];
        setLocalValues(updatedValues);
        setInputValue(""); // Clear input after adding
        setFieldValue(name, updatedValues);
      }
    };

    const handleDelete = (index) => {
      const updatedValues = localValues.filter((_, i) => i !== index);
      setLocalValues(updatedValues);
    };



    const handleInputChange = (e) => {
      const value = e.target.value;
      setInputValue(value);
      
      // Ensure Formik has the latest value in the array
      if (value.trim() !== "") {
        setFieldValue(name, [...localValues, value]);
      } else {
        setFieldValue(name, localValues); // Avoid adding empty values
      }
    };
    

    return (
      <div style={{ width: "100%" }}>
        <Typography variant="body1">
          <label htmlFor={name} className="input-heading12" style={{ fontSize: "15px", fontWeight: "450" }}>
            {label}
          </label>
          {important && <FaStarOfLife style={{ color: "#F53E5C", fontSize: "8px", marginLeft: "3px" }} />}
        </Typography>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Field
            id={name}
            type={inputType !== "textarea" ? inputType : "text"}
            name={name}
            as={inputType === "textarea" ? "textarea" : "input"}
            placeholder={custPlaceholder || "Enter Input"}
            value={inputValue}
            // onChange={(e) => setInputValue(e.target.value)}
            onChange={handleInputChange}
            {...rest}
            style={{
              flex: 1,
              borderRadius: "3px",
              boxSizing: "border-box",
              height: inputType === "textarea" ? "100px" : "35px",
              paddingLeft: "10px",
            }}
            className="custominput-field12"
          />
          <Button variant="contained" color="primary" onClick={handleAdd} style={{ minWidth: "40px", height: "35px" }}
          sx={{background:"#C38F51"}}
          >
            <FaPlus />
          </Button>
        </div>

        {/* Display Added Values */}
        {/* <div style={{ marginTop: "10px" }}>
          {localValues.map((item, index) => (
            <div key={index} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "5px" }}>
              <Typography variant="body2" style={{ flex: 1, background: "#f0f0f0", padding: "5px", borderRadius: "3px" }}>
                {item}
              </Typography>
              <IconButton size="small" onClick={() => handleDelete(index)} style={{ color: "red" }}>
                <FaTimes />
              </IconButton>
            </div>
          ))}
        </div> */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "10px" }}>
          {localValues.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                // border:"1px solid #3B4056",
                // background: "#f0f0f0",
                color:"white",
                background: "#C38F51",
                padding: "5px 10px",
                borderRadius: "25px",
                width: "auto", // Auto width based on content
                whiteSpace: "nowrap", // Prevent text from wrapping
              }}
            >
              <Typography variant="body1" sx={{ marginRight: "5px" }}>
                {item}
              </Typography>
              <IconButton size="small" onClick={() => handleDelete(index)} sx={{ color: "red", padding: "2px" }}>
                <FaTimes style={{fontSize:"15px",color:"white"}}/>
              </IconButton>
            </Box>
          ))}
        </Box>

        <ErrorMessage name={name} component="div" className="inputs-error-msg" style={{ color: "red", fontSize: "12px", fontWeight: "400" }} />
      </div>
    );
  };

  export default CustomAddCountryInput;
