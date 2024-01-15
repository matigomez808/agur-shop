import styles from './footer.module.css'

function Footer() {
  return (
    <div className={styles.footer}>
      <h4>Todo lo que podes ver en este sitio es confeccionado a mano en Santa Rosa, La Pampa, Argentina</h4>
      <h4>Podes ver mas fotos en <a href="https://www.instagram.com/agurlenceria/" target='_blank'>Instagram</a></h4>
      <p>Este sitio fue desarrollado por Mati Gomez</p>
    </div>
  )
}

export default Footer;