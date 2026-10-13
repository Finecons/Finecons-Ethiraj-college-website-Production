
import { Grid, styled } from "@mui/material";
import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Parcels from '../../Assets/Picked up.svg';
import Shipped_img from '../../Assets/Shipped.svg';
import Delivered_img from '../../Assets/Delivered.svg';

import "./Parcel.css";
import { useSelector } from "react-redux";




  
  
// Styled Stepper component with green color and increased width
const GreenStepper = styled(Stepper)(({ theme }) => ({
  '& .MuiStepConnector-line': {
    borderColor: '#29CB64',
    borderWidth: '3.8px', // Adjust the width of the stepper line
  },
}));




const TrackParcelBox1 = (props) => {
  
  const steps = [
    {
      label: "Ordered",
      complete: true,
      date: "27 Feb 2024, 02:30 PM",
      icon: Parcels,
      bg_color: "#4DC4FF"
    },
    {
      label: "shipped",
      complete: false,
      date: "27 Feb 2024, 05:00 PM",
      icon: Shipped_img,
      bg_color: "#FFBF08"

    },
    {
      label: "delivered",
      complete: false,
      date: "27 Feb 2024, 08:30 PM",
      icon: Delivered_img,
      bg_color: "red"
    } 

  ];
  const { GetTrackingOrder } = useSelector(
    (state) => state?.GetTrackingOrder
  );


  
// Map the response to the steps
const updatedSteps = steps.map(step => {
  const matchingStatus = GetTrackingOrder?.data.find(
    status => status.order_status.toLowerCase() === step.label.toLowerCase()
  );

  if (matchingStatus) {
    return {
      ...step,
      complete: matchingStatus.tracing_status,
      date: matchingStatus.timestamp || "",
      // bg_color: matchingStatus.active_status ? "green" : step.bg_color,
    };
  }

  return step;
});

console.log(updatedSteps,"updatedSteps");

  return (

    <Grid container spacing={2} className="TrackParcelBox-div TrackParcelBox-div-with-icon ">

      <Grid item xs={12} style={{ overflowY: 'auto', maxHeight: '380px' }}>
        <GreenStepper orientation="vertical">
          {updatedSteps?.map((step, index) => (
            <Step key={index} completed={step.complete}>
              <StepLabel
                StepIconComponent={() => (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column', // Set flex direction to column
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '40px', // Adjust width to increase the size of the icon
                      height: '40px', // Adjust height to increase the size of the icon
                      borderRadius: '50%', // Make it a circle
                      backgroundColor: step.complete ? `${step.bg_color}` : '#D6D6D6', // Change background color based on the completion status
                    }}
                  >
              <img src={step.icon} alt="icon" style={{ width: '80%', height: '80%', borderRadius: '50%' }} />
            </div>
          )}
          StepIconProps={{
            classes: {
              root: "step-icon-root",
              active: "step-icon-active",
              completed: "step-icon-completed",
            },
          }}
              >
          <Grid className="StepLabel-tag">
            <Grid>{step.label}</Grid>
            <Grid className="StepLabel-date-div">
              <Grid className="StepLabel-date">{step.date}</Grid>
            </Grid>
          </Grid>
        </StepLabel>
      </Step>
          ))}
    </GreenStepper>
      </Grid >
      
    </Grid >
  );
};


export default TrackParcelBox1;
