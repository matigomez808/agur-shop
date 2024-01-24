'use client'
import styles from '../ItemCards/card.module.css'
import Image from 'next/image'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { Container } from '@mui/material';



export default function ProductModal({ product }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    borderRadius: '4px',
    boxShadow: 24,
    p: 4,
  };
  return (
    <div>
      <Button onClick={handleOpen}
      sx={{
        color: 'black'
      }}
      >
        + Info
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style}>

          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2">
            {product.nombre}
          </Typography>

          <Image
            src={product.imagen}
            alt="imagen no disponible"
            width={400}
            height={500}
          />

          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}>
            ${product.precio}
          </Typography>

        </Box>
      </Modal>
    </div>
  )
}

