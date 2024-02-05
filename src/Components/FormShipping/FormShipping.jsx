import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Box, Divider, Typography, Paper, List, ListItem, ListItemIcon } from '@mui/material';
import { shippingPrices } from '@Data/shippingInfo';
import { Info } from '@mui/icons-material';
import useMyBoundStore from 'src/utils/store/store';


export default function FormShipping() {
  const setSelectedOption = useMyBoundStore((state) => state.setSelectedOption);
  const setShippingPrice = useMyBoundStore((state) => state.setShippingPrice);
  const shippingLocation = useMyBoundStore((state) => state.shippingLocation)
  const formValues = useMyBoundStore((state) => state.formValues)

  const prices = shippingPrices[shippingLocation];

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    setShippingPrice();
  };

  return (

    <>
      <Paper sx={{mt: 4}}>
        <List>
          <ListItem>
            <ListItemIcon><Info /></ListItemIcon>
            <Typography variant='body1' content='p'  textAlign='center'>  Envío a domicilio a {formValues.calle} {formValues.numero}, {formValues.localidad}, {formValues.provincia}</Typography>
          </ListItem>
          <ListItem>
          <ListItemIcon><Info /></ListItemIcon>
            <Typography variant='body1' content='p' textAlign='center'> El servicio standard lleva entre 8 a 10 semanas a caballo y el servicio fancy llega en el acto.</Typography>
          </ListItem>
        </List>
      </Paper>
      <FormControl
        sx={{ mt: 4 }}
        fullWidth>

        <RadioGroup
          aria-labelledby="shipping-options-radio-group"

          name="shipping-options"
          onChange={handleChange}
        >
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <FormControlLabel value="standard" control={<Radio />} label="Santdard" />
            <Box sx={{ flexGrow: 1 }}></Box>
            <Typography>${prices.standard}</Typography>
          </Box>
          <Divider flexItem />
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <FormControlLabel value="fancy" control={<Radio />} label="Fancy" />
            <Box sx={{ flexGrow: 1 }}></Box>
            <Typography>${prices.fancy}</Typography>
          </Box>
          <Divider flexItem />

        </RadioGroup>
      </FormControl>
    </>
  );
}