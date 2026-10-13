import React from 'react';
import { Stepper, Step, StepLabel, Box, Typography } from '@mui/material';

const DashedStepper = ({ activeStep, steps }) => {
    const CustomStepIcon = (props) => {
        const { active, completed, icon } = props;

        return (
            <Box
                sx={{
                    width: 24,
                    height: 24,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    border: '2px dashed',
                    color: completed ? '#C38F51' : active ? 'blue' : 'gray',
                    backgroundColor: completed || active ? 'white' : 'transparent',
                }}
            >
                <Typography
                    sx={{
                        fontWeight: 'bold',
                        color: completed ? '#C38F51' : active ? 'blue' : 'gray',
                    }}
                >
                    {icon}
                </Typography>
            </Box>
        );
    };

    return (
        <Stepper
            alternativeLabel
            activeStep={activeStep}
            sx={{ width: '100%' }}
        >
            {steps.map((label, index) => (
                <Step key={label}>
                    <StepLabel StepIconComponent={CustomStepIcon}>
                        {label}
                    </StepLabel>
                </Step>
            ))}
        </Stepper>
    );
};

export default DashedStepper;
