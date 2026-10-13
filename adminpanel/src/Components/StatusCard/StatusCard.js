// import React from "react";
// import clsx from 'clsx';

// const StatusCard = ({ icon, bgcolor, iconcolor }) => {
//   const color = "blue"
//   const hov = "red"
//   return (
//     <div
//       // className={`p-4 bg-white rounded-lg shadow-lg border-b-[4px] border-b-${color}-500 hover:border-b-${hov}`}>
//       className={clsx(
//         "p-4 bg-white rounded-lg shadow-lg",
//         `border-b-[4px] border-b-${color}-500`,
//         `hover:border-b-${hov}-500`
//       )}
//     >
//       <div className="flex items-center">
//         {/* Icon */}
//         <div className={`p-2  rounded text-[12px]`} style={{ background: bgcolor, color: iconcolor }}>
//           {icon}

//         </div>
//         {/* Text */}
//         <div className="ml-4">
//           <h3 className="text-xl font-semibold text-gray-800">42,026</h3>
//           {/* <p className="text-sm text-gray-500">Total Users</p> */}
//         </div>
//       </div>
//       <p className="text-sm text-black-500 pt-2">Total Users</p>
//       <p className="mt-1 text-sm text-black-500">
//         +18.2% <span className="text-gray-500 text-[10px]">than last week</span>
//       </p>
//     </div>
//   );
// };

// export default StatusCard;



import React from "react";
import { Box, Typography, Icon, Paper } from "@mui/material";
import { clsx } from "clsx";
import { useNavigate } from "react-router-dom";
const StatusCard = ({ subheader1, subheader2, icon, value1, value2, value, header, total_referral, total_registration, Diamonds, Ruby, self, operator, componentPath }) => {
  const color = "blue";
  const hov = "red";
  const navigate=useNavigate()

  return (
    <Paper
      onClick={()=>navigate(componentPath)}
      sx={{
        padding: 1,
        backgroundColor: "white",
        borderRadius: 2,
        boxShadow: 3,
        cursor:'pointer'

      }}
    >

      <Box sx={{
        display: 'flex', justifyContent: "space-between",
        // alignItems:'center'
      }}>
        <Typography variant="subtitle2" sx={{ fontSize: "13px", color: "#C38F51" }} >
          {header}
        </Typography>
        <Box sx={{ border: "1px solid #C38F51", borderRadius: "5px", background: "#C38F51", height: "40px", width: "40px", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Box
            component='img'
            src={icon}
          >

          </Box>
        </Box>

      </Box>

      {total_referral && (
        // <Box sx={{ display: "flex", justifyContent: "start" }}>

        <Box sx={{ display: "flex", justifyContent: "start" }}>


          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="subtitle1" fontSize="17px" color="gray">{subheader1}
              <span style={{ fontSize: "20px", paddingLeft: "5px", fontWeight: "800", color: "black" }}>{value1} </span>
            </Typography>
            {/* <Typography variant="body2" color="#C38F51" mt={0.5}>
              <span style={{ fontSize: "18px", color: "black", fontWeight: "800" }}>{Diamonds} </span>
            </Typography> */}
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>

            <Typography variant="subtitle1" fontSize="17px" color="gray" ml={4}>{subheader2}
              <span style={{ fontSize: "20px", paddingLeft: "5px", fontWeight: "800", color: "black" }}>{value2} </span>
            </Typography>
            {/* <Typography variant="body2" color="#C38F51" mt={0.5}>
              <span style={{ fontSize: "18px", color: "black", fontWeight: "800" }}>{Ruby} </span>
            </Typography> */}

          </Box>

        </Box>
        // </Box>

      )}

      <Typography variant="body2" color="#C38F51" mt={0.5}>
        <span style={{ fontSize: "25px", color: "black", fontWeight: "800" }}>{value} </span>
      </Typography>
    </Paper>
  );
};

export default StatusCard;





