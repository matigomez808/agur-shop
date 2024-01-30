'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormPersonalInfo from '@Components/FormPersonalInfo/FormPersonalInfo';
import useFormStore from 'src/utils/formStore';

const steps = ['Información personal', 'Información de envío', 'Opciones de pago'];

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const {formValues, validationErrors, handleValidation } = useFormStore();

  const handleNext = () => {
    const isValid = handleValidation();
    if (isValid) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      console.log(formValues)
    } else {
      console.log(formValues)
      console.log(validationErrors)
    }
    
    
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const buttons = () => {
    return (
      <React.Fragment>
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}>
            Back
          </Button>
          <Box sx={{ flex: '1 1 auto' }} />
          <Button onClick={handleNext}>
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </Box>
      </React.Fragment>
    )
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
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
      ) : activeStep === 0 ? (
        <React.Fragment>

          <Typography sx={{ mt: 2, mb: 1 }}>Seccion de Info Personal</Typography>
          <FormPersonalInfo />
          {buttons()}
          
        </React.Fragment>

      ) : activeStep === 1 ? (
        <React.Fragment>

          <Typography sx={{ mt: 2, mb: 1 }}>Info de Envio</Typography>
          {buttons()}
        </React.Fragment>
      ) : (
        <React.Fragment>

          <Typography sx={{ mt: 2, mb: 1 }}>Opciones de Pago</Typography>
          {buttons()}
        </React.Fragment>
      )}
    </Box>
  );
}