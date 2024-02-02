'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import { Checkroom, ShoppingCart } from '@mui/icons-material';
import { ShoppingBag } from '@mui/icons-material';
import { ListItemButton, ListItemIcon } from '@mui/material';
import FormPersonalInfo from '@Components/FormPersonalInfo/FormPersonalInfo';
import FormShipping from '@Components/FormShipping/FormShipping';
import FormPaymentOptions from '@Components/FormPaymentOptions/FormPaymentOptoins';
import { validateRequiredFields } from 'src/utils/validation';
import useMyBoundStore from 'src/utils/store/store';

const steps = ['Información personal', 'Información de envío', 'Opciones de pago'];

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  const validationErrors = useMyBoundStore((state) => state.validationErrors);
  const items = useMyBoundStore((state) => state.items);
  const total = useMyBoundStore((state) => state.total);
  const setShippingLocation = useMyBoundStore((state) => state.setShippingLocation);
  const formValues = useMyBoundStore((state) => state.formValues)
  const shippingPrice = useMyBoundStore((state) => state.shippingPrice)

  const handleNext = () => {
    const isValid = validateRequiredFields();
    if (isValid) {
      if (activeStep === 0) {
        console.log(formValues.provincia)
        setShippingLocation(formValues.provincia);
      }
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      
    } else {
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
  const list = () => (
  
      <Paper>
        <List>
          {items && items?.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <ListItemIcon>
                <Checkroom />
              </ListItemIcon>
              <ListItemText sx={{ flex: 1, minWidth: 120 }}>{item.nombre}</ListItemText>
              <ListItemText sx={{ flex: 1, minWidth: 80 }}>${item.precio}</ListItemText>
              <ListItemText sx={{ flex: 1, minWidth: 80 }}>{item.quantity}</ListItemText>
            </ListItem>
          ))}
          <Divider />
          <ListItem sx={{display:'flex'}}>
            {shippingPrice && <><ListItemText >Envío: </ListItemText> <Box sx={{flexGrow:2}}></Box> <ListItemText>${shippingPrice}</ListItemText></>}
            
          </ListItem>
          <ListItem sx={{display:'flex'}}>
            
            <ListItemText >Carrito: </ListItemText>
            <Box sx={{flexGrow:2}}></Box>
            <ListItemText>${total}</ListItemText>
            
            
          </ListItem>
          <ListItem sx={{display:'flex'}}>
            <Divider flexItem />
            <ListItemText >Total: </ListItemText>
            <Box sx={{flexGrow:2}}></Box>
            <ListItemText>${total + shippingPrice}</ListItemText>
          </ListItem>
        </List>
      </Paper>
    
  )

  return (
    <Box>
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
            <FormPersonalInfo />
            {buttons()}

          </React.Fragment>

        ) : activeStep === 1 ? (
          <React.Fragment>
            <FormShipping />
            {buttons()}
          </React.Fragment>
        ) : (
          <React.Fragment>
            <FormPaymentOptions />
            {buttons()}
          </React.Fragment>
        )}
      </Box>
      {list()}
    </Box>
  );
}

