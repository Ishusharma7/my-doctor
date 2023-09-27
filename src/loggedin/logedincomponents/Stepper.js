import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PatientDetails from './PatientDetails';
import AppointmentDet from './AppointmentDet';
import Payment from './Payment';



const steps = ['Patient Details', 'Appointment Details', 'Payment Details'];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = new Set(skipped);
    if (isStepSkipped(activeStep)) {
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <PatientDetails handleNext={handleNext} />;
      case 1:
        return <AppointmentDet handleBack={handleBack} handleNext={handleNext} />;
      case 2:
        return <Payment handleBack={handleBack} />; // Add your payment details components here
      default:
        return <div>Unknown step</div>;
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'end', minHeight:'91.2vh'}}>
      <Box sx={{ width: '70%', marginTop: '15rem', paddingRight:'15rem' }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            return (
              <Step key={label} {...stepProps}>
              <StepLabel><Typography sx={{fontSize:'1.5rem'}}>{label}</Typography></StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {renderStepContent(activeStep)}
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </Box>
  );
}
