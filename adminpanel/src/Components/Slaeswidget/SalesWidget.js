import React from 'react';
import { Card, CardContent, Typography, Box, SvgIcon } from '@mui/material';
import { HiOutlineUsers } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';

const SalesWidget = ({icons,color,title,value,path}) => {
  const totalSales = 3.2944541254806963e+27; // Replace with dynamic value if needed
  const navigate=useNavigate()
  
  const handleNavigatePage=()=>{
    navigate(path)
  }
  return (
    <Box sx={{ padding: 1 , borderRadius:"30px"}}>
      <Card sx={{ borderRadius:"20px"}} onClick={handleNavigatePage}>
        <CardContent>
          <Box display="flex" alignItems="center">
            <Box
              sx={{
                backgroundColor: color,
                padding: 3,
                borderRadius: '50%',
                marginRight: 2,
                width: "67px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize:"20px"
            
              }}
            >
             {icons}
            </Box>
            <Box>
              <Typography variant="body2" color="textSecondary" fontWeight="700">
                {title}
              </Typography>
              <Typography variant="h4" color='black' fontWeight="700" marginTop="5px">
                {/* ${totalSales.toExponential(2)} */}
                {value}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SalesWidget;
