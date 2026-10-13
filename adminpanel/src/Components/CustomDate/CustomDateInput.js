

// import React from 'react';
// import { Field, ErrorMessage } from "formik";
// import { useField } from "formik";

// import { TextField, FormHelperText } from '@mui/material';
// import '../CustomInputLogin/CustomInputLogin.css'

// const CustomDateInput = ({ label, name, ...rest }) => {
//   const [field, meta] = useField(name);

//   return (
//     <div style={{ width: "95%" }}>
//       <div style={{ width: "100%" }}>
//         <div>
//           <label
//             htmlFor={name}
//             className="input-heading12"
//             style={{ fontSize: "16px", fontWeight: "700" }}
//           >
//             {label}
//           </label>
//         </div>
//         <Field  
//         {...field}

//           id={name}
//           name={name}
//           type="date"
//           placeholder="Enter Input"
//           // autoComplete="off" // Disable autofill 
//           {...rest}
//           className='custominput-field12'

//         // validate={validateInput}

//         />
//         <ErrorMessage name={name} component="div" className="inputs-error-msg" style={{ color: "red" }} />
//       </div>
//     </div>
//   );
// };

// export default CustomDateInput;



import React from 'react';
import { Field, ErrorMessage, useField } from "formik";
import '../CustomInputLogin/CustomInputLogin.css';
import { BiBorderRadius } from 'react-icons/bi';

const CustomDateInput = ({ label, name,editData, ...rest }) => {
  const [field, meta] = useField(name);

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  return (
    <div style={{ width: "100%" }}>
      <div style={{ width: "100%" }}>
        <div>
          <label
            htmlFor={name}
            className="input-heading12"
            style={{ fontSize: "16px", fontWeight: "400" }}
          >
            {label}
          </label>
        </div>
        
        <Field  
          {...field}
          id={name}
          name={name}
          type="date"
          placeholder="Enter Input"
          min={editData ? undefined : today} // Disable past dates
          {...rest}
          className='custominput-field12'
          style={{borderRadius:"3px"}}
        />
        <ErrorMessage name={name} component="div" className="inputs-error-msg" style={{ color: "red",fontSize:"10px" }} />
      </div>
    </div>
  );
};

export default CustomDateInput;

