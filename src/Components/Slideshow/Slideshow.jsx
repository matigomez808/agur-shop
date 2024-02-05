'use client'
import React from "react";
import { Box } from "@mui/material";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import styles from './slideshow.module.css'

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

const swipeConfidenceThreshold = 10000;

const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};


export const Slideshow = ({ imagenes }) => {
  const [page, setPage] = React.useState(0);
  const [direction, setDirection] = React.useState(0);

  let images = [];

  imagenes.forEach((img) => {
    let imgURL = img.replaceAll('"', '');
    images.push(imgURL)
  })


  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage(page + newDirection);
    setDirection(newDirection);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        position:'relative'
      }}>
      <AnimatePresence 
      initial={false} 
      custom={direction}>
        <motion.img
          key={page}
          src={images[imageIndex]}
          
          height={600}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <Box
        className={styles.next}
        onClick={() => paginate(1)}
        sx={{
          zIndex: 2000,
          top: 330,
          right: 20,
          position: 'absolute',
          display: 'flex',
          justifyContent:'center',
          alignContent: 'center'

        }}>
        <ArrowRight />
      </Box>
      <Box
        className={styles.prev}
        onClick={() => paginate(-1)}

        sx={{
          zIndex: 2000,
          top: 330,
          left: 20,
          position: 'absolute',
          display: 'flex',
          justifyContent:'center',
          alignContent: 'center'
        }}>
        <ArrowLeft />
      </Box>
    </Box>
  );
};