import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Checkroom, ShoppingCart } from '@mui/icons-material';
import { ShoppingBag } from '@mui/icons-material';
import { ListItemButton, ListItemIcon, Typography } from '@mui/material';
import useCartStore from 'src/utils/store';
import { Remove } from '@mui/icons-material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';


export default function TemporaryDrawer() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { items, total, addItem, removeItem } = useCartStore();

  const toggleDrawer = () => {

    setIsOpen(!isOpen);
  };

  const handleRemoveItem = (item) => {
    removeItem(item);
  }

  const list = () => (
    <Box
      sx={{ width: 400 }}
      role="presentation"
      
    >
      <List>
        <ListItem>
        <Typography variant='h5' component='p' >Tu Carrito</Typography>
        </ListItem>
        <Divider />
        <ListItem key="labels" disablePadding sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <ListItemIcon>
            <Checkroom />
          </ListItemIcon>
          <ListItemText sx={{ flex: 1, minWidth: 120 }}>
            <Typography variant="subtitle1">Item</Typography>
          </ListItemText>
          <ListItemText sx={{ flex: 1, minWidth: 80 }}>
            <Typography variant="subtitle1">Precio</Typography>
          </ListItemText>
          <ListItemText sx={{ flex: 1, minWidth: 80 }}>
            <Typography variant="subtitle1">Cantidad</Typography>
          </ListItemText>
          <ListItemText sx={{ flex: 1, minWidth: 80 }}>
            <Typography variant="subtitle1"></Typography>
          </ListItemText>
        </ListItem>
        {items && items?.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <ListItemIcon>
              <Checkroom />
            </ListItemIcon>
            <ListItemText sx={{ flex: 1, minWidth: 120 }}>{item.nombre}</ListItemText>
            <ListItemText sx={{ flex: 1, minWidth: 80 }}>${item.precio}</ListItemText>
            <ListItemText sx={{ flex: 1, minWidth: 80 }}>{item.quantity}</ListItemText>
            <ListItemButton onClick={(event) => { event.stopPropagation(); handleRemoveItem(item); }}>
              <Remove />
            </ListItemButton>
          </ListItem>
        ))}
        <Divider />
      </List>
      <ListItem sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <ListItemText sx={{ flex: 1, minWidth: 120 }}>Total:</ListItemText>
        <ListItemText sx={{ flex: 1, minWidth: 80 }}>${total}</ListItemText>
      </ListItem>

      <Divider />

      <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', height: '100%' }}>
        <Divider />

        <ListItemButton sx={{ width: '100%', maxHeight: '1.5rem' }}>
          <Typography variant="h6" component="span" sx={{ flex: 1 }}>Ir al Checkout</Typography>
          <ListItemIcon>
            <ShoppingCartCheckoutIcon />
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
    </Box>
  );

  return (


    <Box>
      <Button onClick={toggleDrawer}><ShoppingBag /></Button>
      <Drawer
        anchor='right'
        open={isOpen}
        onClose={toggleDrawer}
        sx={{ display: 'flex', opacity: 1, zIndex: 1000 }}
      >
        {list()}
      </Drawer>
    </Box>


  );
}