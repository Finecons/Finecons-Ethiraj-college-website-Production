// // // import React, { useState } from 'react';
// // // import { Autocomplete, TextField } from '@mui/material';
// // // import SearchIcon from '@mui/icons-material/Search';
// // // import "./Sidebar.css"

// // // // Sample data for dropdown suggestions
// // // const options = ['Option 1', 'Option 2', 'Option 3'];

// // // function SearchWithDropdown() {
// // //   const [value, setValue] = useState(null);

// // //   return (
// // //     <Autocomplete
// // //     style={{width:"100%",border:"none",padding:"none"}}
// // //       freeSolo
// // //       options={options}
// // //       value={value}
// // //       onChange={(event, newValue) => setValue(newValue)}
// // //       renderInput={(params) => (
// // //         <TextField
// // //         style={{border:"none",padding:"0"}}
// // //           {...params}
// // //           placeholder="Search in my library"
// // //           InputProps={{
// // //             ...params.InputProps,
// // //             startAdornment: (
// // //               <>
// // //                 <SearchIcon style={{ fontSize: 20, marginLeft: 8 ,padding:0}} />
// // //                 {params.InputProps.startAdornment}
// // //               </>
// // //             ),
// // //           }}
// // //         />
// // //       )}
// // //     />
// // //   );
// // // }

// // // export default SearchWithDropdown;



// import React, { useState } from 'react';
// import { Autocomplete, TextField } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';

// const options = ['Option 1', 'Option 2', 'Option 3'];

// function SearchWithDropdown() {
//   const [value, setValue] = useState(null);

//   return (
//     <Autocomplete
//     style={{width:"100%",border:"none",padding:"none"}}
//       freeSolo
//       options={options}
//       value={value}
//       onChange={(event, newValue) => setValue(newValue)}
//       renderInput={(params) => (
//         <TextField
//           {...params}
//           placeholder="Search in my library"
//           InputProps={{
//             ...params.InputProps,
//             startAdornment: (
//               <>
//                 <SearchIcon style={{ fontSize: 20, marginLeft: 8 }} />
//                 {params.InputProps.startAdornment}
//               </>
//             ),
//             style: { padding: 0,outlineColor:"white" }, // Remove padding here
//           }}
//           sx={{
//             '& .MuiOutlinedInput-root': {
//               padding: 0,
//               outline:"",
//               // border:"1px solid black"
//             },
//           }}
//         />
//       )}
//     />
//   );
// }

// export default SearchWithDropdown;


// import React, { useState } from 'react';
// import { Autocomplete, Box, TextField } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import {InputBase, IconButton, MenuItem, Select, FormControl, Divider } from '@mui/material';
// import {  ExpandMore as ExpandMoreIcon, ErrorOutline as ErrorIcon } from '@mui/icons-material';




// const options = ['Option 1', 'Option 2', 'Option 3'];

// function SearchWithDropdown() {
//   const [value, setValue] = useState(null);
//   const [library, setLibrary] = useState('Quizizz library');

//   const handleLibraryChange = (event) => {
//     setLibrary(event.target.value);
//   };

//   return (
//     <Box style={{display:"flex", width: '100%', border: 'none', padding: 'none' }}>
//       <Autocomplete
//         style={{ width: '100%', border: 'none', padding: 'none' }}
//         freeSolo
//         options={options}
//         value={value}
//         onChange={(event, newValue) => setValue(newValue)}
//         renderInput={(params) => (
//           <TextField
//             {...params}
//             placeholder="Search in my library"
//             InputProps={{
//               ...params.InputProps,
//               startAdornment: (
//                 <>
//                   <SearchIcon style={{ fontSize: 20, marginLeft: 8 }} />
//                   {params.InputProps.startAdornment}
//                 </>
//               ),
//             }}
//             sx={{
//               '& .MuiOutlinedInput-root': {
//                 padding: 0,
//                 '& fieldset': {
//                   border: 'none', // Removes the border
//                 },
//                 '&:hover fieldset': {
//                   border: 'none', // Removes the border on hover
//                 },
//                 '&.Mui-focused fieldset': {
//                   border: 'none', // Removes the border when focused
//                 },
//               },
//               '& .MuiInputBase-input': {
//                 padding: 0, // Removes padding inside the input
//               },
//             }}
//           />
//         )}
//       />
//       <Divider orientation="vertical" flexItem sx={{ mx: 2, borderColor: 'dark.5' }} />
//       <FormControl sx={{ width: '140px' }}>
//         <Select
//           value={library}
//           onChange={handleLibraryChange}
//           displayEmpty
//           inputProps={{ 'aria-label': 'Library selection' }}
//           sx={{ height: 40, fontWeight: 'fontWeightBold', fontSize: '14px', color: 'dark.2' }}
//           IconComponent={ExpandMoreIcon}
//         >
//           <MenuItem value="Quizizz library" className="option" sx={{ fontWeight: 'fontWeightBold', color: 'lilac' }}>
//             Quizizz library
//           </MenuItem>
//           <MenuItem value="My library" className="option" sx={{ fontWeight: 'fontWeightBold', color: 'dark.2' }}>
//             My library
//           </MenuItem>
//           <MenuItem value="Reports" className="option" sx={{ fontWeight: 'fontWeightBold', color: 'dark.2' }}>
//             Reports
//           </MenuItem>
//         </Select>
//       </FormControl>
//     </Box>
//   );
// }

// export default SearchWithDropdown;



// import React, { useState } from 'react';
// import { Autocomplete, Box, TextField } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import { InputBase, IconButton, MenuItem, Select, FormControl, Divider } from '@mui/material';
// import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

// const options = ['Option 1', 'Option 2', 'Option 3'];

// function SearchWithDropdown() {
//   const [value, setValue] = useState(null);
//   const [library, setLibrary] = useState('Quizizz library');

//   const handleLibraryChange = (event) => {
//     setLibrary(event.target.value);
//   };

//   return (
//     <Box sx={{ display: 'flex',justifyContent:"space-between", alignItems: 'center', width: '100%' }}>
//       <Autocomplete
//         freeSolo
//         options={options}
//         value={value}
//         onChange={(event, newValue) => setValue(newValue)}
//         renderInput={(params) => (
//           <TextField
//             {...params}
//             placeholder="Search in my library"
//             InputProps={{
//               ...params.InputProps,
//               startAdornment: (
//                 <>
//                   <SearchIcon sx={{ fontSize: 20, marginLeft: 1 }} />
//                   {params.InputProps.startAdornment}
//                 </>
//               ),
//               endAdornment: (
//                 <FormControl sx={{ width: '140px', marginLeft: 'auto', marginRight: 1 }}>
//                   <Select
//                     value={library}
//                     onChange={handleLibraryChange}
//                     displayEmpty
//                     inputProps={{ 'aria-label': 'Library selection' }}
//                     sx={{
//                       border: 'none',
//                       outline: 'none',
//                       padding: 0,
//                       '& .MuiOutlinedInput-notchedOutline': { border: 'none' }, // Removes the border
//                       '&:hover .MuiOutlinedInput-notchedOutline': { border: 'none' }, // Removes the border on hover
//                       '&.Mui-focused .MuiOutlinedInput-notchedOutline': { border: 'none' }, // Removes the border when focused
//                       fontWeight: 'fontWeightBold',
//                       fontSize: '14px',
//                       color: 'dark.2',
//                       height: '40px',
//                     }}
//                     IconComponent={ExpandMoreIcon}
//                   >
//                     <MenuItem value="Quizizz library" sx={{ fontWeight: 'fontWeightBold', color: 'lilac' }}>
//                       Quizizz library
//                     </MenuItem>
//                     <MenuItem value="My library" sx={{ fontWeight: 'fontWeightBold', color: 'dark.2' }}>
//                       My library
//                     </MenuItem>
//                     <MenuItem value="Reports" sx={{ fontWeight: 'fontWeightBold', color: 'dark.2' }}>
//                       Reports
//                     </MenuItem>
//                   </Select>
//                 </FormControl>
//               ),
//             }}
//             sx={{
//               '& .MuiOutlinedInput-root': {
//                 padding: 0,
//                 '& fieldset': {
//                   border: 'none', // Removes the border
//                 },
//                 '&:hover fieldset': {
//                   border: 'none', // Removes the border on hover
//                 },
//                 '&.Mui-focused fieldset': {
//                   border: 'none', // Removes the border when focused
//                 },
//               },
//               '& .MuiInputBase-input': {
//                 padding: 0, // Removes padding inside the input
//               },
//               display: 'flex',
//               alignItems: 'center',
//               flex: 1,
//             }}
//           />
//         )}
//       />
//     </Box>
//   );
// }

// export default SearchWithDropdown;


import React, { useState } from 'react';
import { Autocomplete, Box, Divider, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { FormControl, MenuItem, Select } from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

const options = ['Option 1', 'Option 2', 'Option 3'];

function SearchWithDropdown() {
  const [value, setValue] = useState(null);
  const [library, setLibrary] = useState('Quizizz library');

  const handleLibraryChange = (event) => {
    setLibrary(event.target.value);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
      <Autocomplete
        freeSolo
        options={options}
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        sx={{ width: '100%' }} // Ensure Autocomplete takes full width
        renderInput={(params) => (
          <TextField
            {...params}
            fullWidth // Ensure TextField takes full width
            placeholder="Search in my library"
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <>
                  <SearchIcon sx={{ fontSize: 20, marginLeft: 1 }} />
                  {params.InputProps.startAdornment}
                </>
              ),
              endAdornment: (
                <>
                  <Divider orientation="vertical" flexItem sx={{ mx: 2,mt:"5px", borderColor: 'black' ,height:"30px"}} />
                  <FormControl sx={{ width: '140px', marginLeft: 'auto', marginRight: 1 }}>
                    <Select
                      value={library}
                      onChange={handleLibraryChange}
                      displayEmpty
                      inputProps={{ 'aria-label': 'Library selection' }}
                      sx={{
                        border: 'none',
                        outline: 'none',
                        padding: 0,
                        '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                        '&:hover .MuiOutlinedInput-notchedOutline': { border: 'none' },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': { border: 'none' },
                        '& .MuiInputBase-input': {
                          padding: 0, // Removes padding inside the input
                        },
                        fontWeight: 'fontWeightBold',
                        fontSize: '14px',
                        color: 'dark.2',
                        height: '40px',
                      }}
                      IconComponent={ExpandMoreIcon}
                    >
                      <MenuItem value="Quizizz library" sx={{ fontWeight: 'fontWeightBold', color: 'lilac' }}>
                        Quizizz library
                      </MenuItem>
                      <MenuItem value="My library" sx={{ fontWeight: 'fontWeightBold', color: 'dark.2' }}>
                        My library
                      </MenuItem>
                      <MenuItem value="Reports" sx={{ fontWeight: 'fontWeightBold', color: 'dark.2' }}>
                        Reports
                      </MenuItem>
                    </Select>
                  </FormControl>
                  </>
                  ),
            }}
                  sx={{ '& .MuiInputBase-input': {
                    padding: 0, // Removes padding inside the input
                  },
                    '& .MuiOutlinedInput-root': {
                      padding: 0,
                      '& fieldset': {
                        border: 'none',
                      },
                      '&:hover fieldset': {
                        border: 'none',
                      },
                      '&.Mui-focused fieldset': {
                        border: 'none',
                      },
                    },
                    '& .MuiInputBase-input': {
                      padding: 0,
                    },
                  }}
          />
        )}
      />
                </Box>
  );
}

      export default SearchWithDropdown;
