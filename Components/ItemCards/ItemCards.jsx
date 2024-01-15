"use client";
import styles from "@Styles/page.module.css";
import Image from "next/image";
import ProductModal from "../ProductModal/ProductModal";
import { useState } from "react";

function ItemCards({ product }) {
  const [state, setState] = useState(false);
  const newProd = { ...product };
  function handleOpen() {
    setState(true);
  }
  function handleClose() {
    setState(false);
  }

  return (
    <div className={styles.card}>
      <Image
        className={styles.cardImg}
        src={newProd.imagen}
        alt="imagen no disponible"
        width={400}
        height={500}
      />
      {state && <ProductModal product={newProd} handleClose={handleClose} />}
      <p className={styles.cardName}>{newProd.nombre}</p>

      <p className={styles.cardPrecio}>${newProd.precio}</p>
      <div className={styles.cardBtns}>
        <button className={styles.cardBtnInfo} onClick={handleOpen}>
          + info
        </button>
        <button className={styles.cardBtnAdd}>Agregar al carrito</button>
      </div>
    </div>
  );
}

export default ItemCards;
