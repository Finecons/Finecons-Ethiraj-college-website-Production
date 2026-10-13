// // // // // import React, { useState } from 'react';
// // // // // import { Box, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';

// // // // // const ActiveInactiveRadio = ({name}) => {
// // // // //     const [status, setStatus] = useState('active');

// // // // //     const handleChange = (event) => {
// // // // //         setStatus(event.target.value);
// // // // //     };

// // // // //     return (
// // // // //         <Box
// // // // //         //  sx={{ p: 2, border: '1px solid #ccc', borderRadius: '8px', maxWidth: '300px' }}
// // // // //         >
// // // // //             <Typography gutterBottom
// // // // //                 style={{ fontSize: "16px" }}
// // // // //             >
// // // // //                 Status
// // // // //             </Typography>
// // // // //             <FormControl component="fieldset">
// // // // //                 <RadioGroup
// // // // //                     row
// // // // //                     value={status}
// // // // //                     onChange={handleChange}
// // // // //                     aria-label="status"
// // // // //                     name={name}
// // // // //                 >
// // // // //                     <FormControlLabel
// // // // //                         value="active"
// // // // //                         control={<Radio />}
// // // // //                         label="Active"
// // // // //                         sx={{
// // // // //                             color: status === 'active' ? 'green' : 'inherit',
// // // // //                             fontWeight: status === 'active' ? 'bold' : 'normal',
// // // // //                         }}
// // // // //                     />
// // // // //                     <FormControlLabel
// // // // //                         value="inactive"
// // // // //                         control={<Radio />}
// // // // //                         label="Inactive"
// // // // //                         sx={{
// // // // //                             color: status === 'inactive' ? 'red' : 'inherit',
// // // // //                             fontWeight: status === 'inactive' ? 'bold' : 'normal',
// // // // //                         }}
// // // // //                     />
// // // // //                 </RadioGroup>
// // // // //             </FormControl>
// // // // //         </Box>
// // // // //     );
// // // // // };

// // // // // export default ActiveInactiveRadio;


// // // // // import React, { useState } from 'react';

// // // // // const ActiveInactiveRadio = ({ name }) => {
// // // // //   const [status, setStatus] = useState('active');
// // // // //   console.log(status,"status")

// // // // //   const handleChange = (event) => {
// // // // //     setStatus(event.target.value);
// // // // //   };

// // // // //   return (
// // // // //     <div>
// // // // //       <label style={{ fontSize: '16px', display: 'block', marginBottom: '10px' }}>
// // // // //         Status
// // // // //       </label>
// // // // //       <div>
// // // // //         <input
// // // // //           type="radio"
// // // // //           id="active"
// // // // //           name={name}
// // // // //           value="active"
// // // // //           checked={status === 'active'}
// // // // //           onChange={handleChange}
// // // // //           style={{
// // // // //             color: status === 'active' ? 'green' : 'inherit',
// // // // //             fontWeight: status === 'active' ? 'bold' : 'normal',
// // // // //           }}
// // // // //         />
// // // // //         <label
// // // // //           htmlFor="active"
// // // // //           style={{
// // // // //             color: status === 'active' ? 'green' : 'inherit',
// // // // //             fontWeight: status === 'active' ? 'bold' : 'normal',
// // // // //             marginRight: '10px',
// // // // //           }}
// // // // //         >
// // // // //           Active
// // // // //         </label>

// // // // //         <input
// // // // //           type="radio"
// // // // //           id="inactive"
// // // // //           name={name}
// // // // //           value="inactive"
// // // // //           checked={status === 'inactive'}
// // // // //           onChange={handleChange}
// // // // //           style={{
// // // // //             color: status === 'inactive' ? 'red' : 'inherit',
// // // // //             fontWeight: status === 'inactive' ? 'bold' : 'normal',
// // // // //           }}
// // // // //         />
// // // // //         <label
// // // // //           htmlFor="inactive"
// // // // //           style={{
// // // // //             color: status === 'inactive' ? 'red' : 'inherit',
// // // // //             fontWeight: status === 'inactive' ? 'bold' : 'normal',
// // // // //           }}
// // // // //         >
// // // // //           Inactive
// // // // //         </label>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ActiveInactiveRadio;



// // // // import React, { useState, useEffect } from 'react';

// // // // const ActiveInactiveRadio = ({ name, value, onChange }) => {
// // // //     // Use the value from props (this allows the parent to control the state)
// // // //     const [status, setStatus] = useState(value || 'active');

// // // //     // When the value from props changes, update the local state
// // // //     useEffect(() => {
// // // //         setStatus(value);
// // // //     }, [value]);

// // // //     const handleChange = (event) => {
// // // //         const newValue = event.target.value;
// // // //         setStatus(newValue);
// // // //         if (onChange) {
// // // //             onChange(newValue); // Pass the new value to the parent
// // // //         }
// // // //     };

// // // //     return (
// // // //         <div>
// // // //             <label style={{ fontSize: '16px', display: 'block', marginBottom: '10px' }}>
// // // //                 Status
// // // //             </label>
// // // //             <div style={{display:"flex",alignItems:"center",justifyContent:"start"}}>
// // // //                 <div>
// // // //                     <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>


// // // //                         <input
// // // //                             type="radio"
// // // //                             id="active"
// // // //                             name={name}
// // // //                             value="active"
// // // //                             checked={status === 'active'}
// // // //                             onChange={handleChange}
// // // //                             style={{
// // // //                                 // color: status === 'active' ? 'green' : 'inherit',
// // // //                                 // fontWeight: status === 'active' ? 'bold' : 'normal',
// // // //                                 color: "black"
// // // //                             }}
// // // //                         />
// // // //                         <label
// // // //                             htmlFor="active"
// // // //                             style={{
// // // //                                 // color: status === 'active' ? 'green' : 'inherit',
// // // //                                 // fontWeight: status === 'active' ? 'bold' : 'normal',
// // // //                                 color: "black",
// // // //                                 marginRight: '10px',
// // // //                             }}
// // // //                         >
// // // //                             Active
// // // //                         </label>

// // // //                     </div>
// // // //                 </div>
// // // //                 <div>
// // // //                     <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>

// // // //                         <input
// // // //                             type="radio"
// // // //                             id="inactive"
// // // //                             name={name}
// // // //                             value="inactive"
// // // //                             checked={status === 'inactive'}
// // // //                             onChange={handleChange}
// // // //                             style={{
// // // //                                 // color: status === 'inactive' ? 'red' : 'inherit',
// // // //                                 // fontWeight: status === 'inactive' ? 'bold' : 'normal',
// // // //                                 color: "black"
// // // //                             }}
// // // //                         />
// // // //                         <label
// // // //                             htmlFor="inactive"
// // // //                             style={{
// // // //                                 // color: status === 'inactive' ? 'red' : 'inherit',
// // // //                                 // fontWeight: status === 'inactive' ? 'bold' : 'normal',
// // // //                                 color: "black"

// // // //                             }}
// // // //                         >
// // // //                             Inactive
// // // //                         </label>
// // // //                     </div>
// // // //                 </div>
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // };

// // // // export default ActiveInactiveRadio;


// // // import React, { useState, useEffect } from 'react';

// // // const ActiveInactiveRadio = ({ name, value, onChange }) => {
// // //     const [status, setStatus] = useState(value || 'active');

// // //     useEffect(() => {
// // //         setStatus(value);
// // //     }, [value]);

// // //     const handleChange = (event) => {
// // //         const newValue = event.target.value;
// // //         setStatus(newValue);
// // //         if (onChange) {
// // //             onChange(newValue);
// // //         }
// // //     };

// // //     return (
// // //         <div>
// // //             <label style={{ fontSize: '16px', display: 'block', marginBottom: '10px' }}>
// // //                 Status
// // //             </label>
// // //             <div style={{ display: "flex", alignItems: "center", justifyContent: "start" }}>
// // //                 <div style={{ marginRight: '20px' }}>
// // //                     <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
// // //                         <input
// // //                             type="radio"
// // //                             id="active"
// // //                             name={name}
// // //                             value="active"
// // //                             checked={status === 'active'}
// // //                             onChange={handleChange}
// // //                             style={{
// // //                                 width: '20px', // Customize size
// // //                                 height: '20px', // Customize size
// // //                                 accentColor: status === 'active' ? '#C38F51' : 'black', // Change color when active
// // //                                 // borderRadius: '50%', // Round shape
// // //                                 // transition: 'all 0.3s ease' // Smooth transition for color
// // //                             }}
// // //                         />
// // //                         <label
// // //                             htmlFor="active"
// // //                             style={{
// // //                                 color: "black",
// // //                                 marginLeft: '8px',
// // //                                 fontSize: '16px', // Adjust font size
// // //                                 // fontWeight: status === 'active' ? 'bold' : 'normal',
// // //                                 // transition: 'all 0.3s ease' // Smooth transition for font weight
// // //                             }}
// // //                         >
// // //                             Active
// // //                         </label>
// // //                     </div>
// // //                 </div>
// // //                 <div>
// // //                     <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
// // //                         <input
// // //                             type="radio"
// // //                             id="inactive"
// // //                             name={name}
// // //                             value="inactive"
// // //                             checked={status === 'inactive'}
// // //                             onChange={handleChange}
// // //                             style={{
// // //                                 width: '20px', // Customize size
// // //                                 height: '20px', // Customize size
// // //                                 accentColor: status === 'inactive' ? '#C38F51' : 'transperent', // Change color when inactive
// // //                                 // borderRadius: '50%', // Round shape
// // //                                 // transition: 'all 0.3s ease' // Smooth transition for color
// // //                             }}
// // //                         />
// // //                         <label
// // //                             htmlFor="inactive"
// // //                             style={{
// // //                                 color: "black",
// // //                                 marginLeft: '8px',
// // //                                 fontSize: '16px', // Adjust font size
// // //                                 // fontWeight: status === 'inactive' ? 'bold' : 'normal',
// // //                                 // transition: 'all 0.3s ease' // Smooth transition for font weight
// // //                             }}
// // //                         >
// // //                             Inactive
// // //                         </label>
// // //                     </div>
// // //                 </div>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default ActiveInactiveRadio;


// // import React, { useState, useEffect } from 'react';

// // const ActiveInactiveRadio = ({ name, value, onChange }) => {
// //     const [status, setStatus] = useState(value || 'active');

// //     useEffect(() => {
// //         setStatus(value);
// //     }, [value]);

// //     const handleChange = (event) => {
// //         const newValue = event.target.value;
// //         setStatus(newValue);
// //         if (onChange) {
// //             onChange(newValue);
// //         }
// //     };

// //     return (
// //         <div>
// //             <label style={{ fontSize: '16px', display: 'block', marginBottom: '10px' }}>
// //                 Status
// //             </label>
// //             <div style={{ display: "flex", alignItems: "center", justifyContent: "start" }}>
// //                 <div style={{ marginRight: '20px' }}>
// //                     <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
// //                         <input
// //                             type="radio"
// //                             id="active"
// //                             name={name}
// //                             value="active"
// //                             checked={status === 'active'}
// //                             onChange={handleChange}
// //                             style={{
// //                                 width: '20px',
// //                                 height: '20px',
// //                                 appearance: 'none', // Remove default radio button appearance
// //                                 borderRadius: '50%', // Make it round
// //                                 border: '2px solid #C38F51', // Border color
// //                                 backgroundColor: status === 'active' ? '#C38F51' : 'transparent', // Circle color
// //                                 transition: 'all 0.3s ease', // Smooth transition for color
// //                                 cursor: 'pointer',
// //                             }}
// //                         />
// //                         <label
// //                             htmlFor="active"
// //                             style={{
// //                                 color: "black",
// //                                 marginLeft: '8px',
// //                                 fontSize: '16px',
// //                             }}
// //                         >
// //                             Active
// //                         </label>
// //                     </div>
// //                 </div>
// //                 <div>
// //                     <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
// //                         <input
// //                             type="radio"
// //                             id="inactive"
// //                             name={name}
// //                             value="inactive"
// //                             checked={status === 'inactive'}
// //                             onChange={handleChange}
// //                             style={{
// //                                 width: '20px',
// //                                 height: '20px',
// //                                 // appearance: 'none', // Remove default radio button appearance
// //                                 borderRadius: '50%', // Make it round
// //                                 border: '2px solid #C38F51', // Border color
// //                                 backgroundColor: status === 'inactive' ? '#C38F51' : 'transparent', // Circle color
// //                                 transition: 'all 0.3s ease', // Smooth transition for color
// //                                 cursor: 'pointer',
// //                             }}
// //                         />
// //                         <label
// //                             htmlFor="inactive"
// //                             style={{
// //                                 color: "black",
// //                                 marginLeft: '8px',
// //                                 fontSize: '16px',
// //                             }}
// //                         >
// //                             Inactive
// //                         </label>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default ActiveInactiveRadio;



// import React, { useState, useEffect } from 'react';

// const ActiveInactiveRadio = ({ name, value, onChange }) => {
//     const [status, setStatus] = useState(value || 'active');

//     useEffect(() => {
//         setStatus(value);
//     }, [value]);

//     const handleChange = (event) => {
//         const newValue = event.target.value;
//         setStatus(newValue);
//         if (onChange) {
//             onChange(newValue);
//         }
//     };

//     return (
//         <div>
//             <label style={{ fontSize: '16px', display: 'block', marginBottom: '10px' }}>
//                 Status
//             </label>
//             <div style={{ display: "flex", alignItems: "center", justifyContent: "start" }}>
//                 <div style={{ marginRight: '20px' }}>
//                     <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
//                         <input
//                             type="radio"
//                             id="active"
//                             name={name}
//                             value="active"
//                             checked={status === 'active'}
//                             onChange={handleChange}
//                             style={{
//                                 width: '20px',
//                                 height: '20px',
//                                 accentColor: status === 'active' ? '#C38F51' : 'transparent', // Only change the accent color of the circle
//                                 borderRadius: '50%', // Make it round
//                                 cursor: 'pointer',
//                             }}
//                         />
//                         <label
//                             htmlFor="active"
//                             style={{
//                                 color: "black",
//                                 marginLeft: '8px',
//                                 fontSize: '16px',
//                             }}
//                         >
//                             Active
//                         </label>
//                     </div>
//                 </div>
//                 <div>
//                     <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
//                         <input
//                             type="radio"
//                             id="inactive"
//                             name={name}
//                             value="inactive"
//                             checked={status === 'inactive'}
//                             onChange={handleChange}
//                             style={{
//                                 width: '20px',
//                                 height: '20px',
//                                 accentColor: status === 'inactive' ? '#C38F51' : 'transparent', // Only change the accent color of the circle
//                                 borderRadius: '50%', // Make it round
//                                 cursor: 'pointer',
//                             }}
//                         />
//                         <label
//                             htmlFor="inactive"
//                             style={{
//                                 color: "black",
//                                 marginLeft: '8px',
//                                 fontSize: '16px',
//                             }}
//                         >
//                             Inactive
//                         </label>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ActiveInactiveRadio;



import React, { useState, useEffect } from "react";
import { Box, Radio, RadioGroup, FormControlLabel } from "@mui/material";

const ActiveInactiveRadio = ({ name, value, onChange }) => {
  const [status, setStatus] = useState(value || "active");

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
        Status
      </label>
      <Box>
        <RadioGroup name={name} value={status} onChange={handleChange} row>
          <FormControlLabel
            value="active"
            name={name}
            control={
              <Radio
                sx={{
                  color: "#3B4056",
                  "&.Mui-checked": { color: "#C38F51" },
                }}
              />
            }
            label="Active"
          />
          <FormControlLabel
            value="inactive"
            name={name}
            control={
              <Radio
                sx={{
                  color: "#3B4056",
                  "&.Mui-checked": { color: "#C38F51" },
                }}
              />
            }
            label="Inactive"
          />
        </RadioGroup>
      </Box>
    </div>
  );
};

export default ActiveInactiveRadio;
