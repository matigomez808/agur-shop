'use client'
import styles from "./card.module.css";
import Image from "next/image";
import ProductModal from "../ProductModal/ProductModal";
import { Paper, Typography, Grid, Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";

function ItemCards({ product }) {

  const newProd = { ...product };



  const shape = {
    initial: {
      opacity: 0,
      y: 345,
    },
    animate: {
      opacity: 1,
      y: -180,
    }
  };
  const info = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        ease: 'easeIn'
      }
    }
  }

  return (
    <Grid item xs={3}>
      <Paper
        elevation={4} square
        sx={{
          overflow: 'hidden',
          width: 275,
          height: 345

        }}>
        <motion.div
          style={{
            position: 'relative'
          }}
          initial='initial'
          whileHover='animate'
          animate='initial'>
          <Image
            src={newProd.imagen}
            alt="imagen no disponible"
            width={275}
            height={345}

          />
          <motion.div
            className={styles.shape}
            variants={shape}
          >
          </motion.div>
          <motion.div
            variants={info}>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                position: 'absolute',
                top: 235,
                left: 43
              }}>
              {newProd.nombre}
            </Typography>
            <Typography
              variant="h5"
              component="p"
              sx={{
                position: 'absolute',
                top: 270,
                left: 10
                
              }}>
              ${newProd.precio}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                position: 'absolute',
                top: 300,
                left: 11
              }}>

              <ProductModal product={product}
                />

              <Button
                variant='text'
                className={styles.cardBtnAdd}
                sx={{
                  color: 'black'
                }}
              >
                Agregar al carrito
              </Button>
            </Box>
          </motion.div>
        </motion.div>
      </Paper>
    </Grid>
  );
}

export default ItemCards;
