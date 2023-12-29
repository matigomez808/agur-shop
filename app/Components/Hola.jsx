import Image from "next/image"
import styles from '@Styles/page.module.css'
import agurAnita from '../../public/images/agurPics.jpg'


const Hola = () => {
    return (
       
            <div className={styles.aboutGrid} >
                
                    <p className={styles.about}>
                        Hola, soy Anita y soy quien esta detrás de Agur. 
                        Este es un emprendimiento de ropa interior artesanal y a medida. Con este espacio busco compartir mi vision de lo que la ropa interior y la sensualidad pueden ser. 
                        Creo que el mercado masivo no se encarga de trabajar esas ideas mas alla del marketing y la hegemonía. 
                        Y la verdad la suensualidad pasa por otros lugares en mi opninión y la ropa interior puede ser tanto más que lo que se plantea.
                        Espero aquí puedan encontrar algo que les guste. 
                        Saludos!
                    </p>
                    <Image
                    className={styles.aboutFlavor}
                    src='/images/assetsC-1.png'
                    alt='Imagen no disponible'
                    width='1000'
                    height='555' />
                

                
                    <Image 
                    className={styles.aboutAnita}
                    src='/images/assetsC.png'
                    alt="Esta es una foto de anita" 
                    height='500'
                    width='400' />
                
            </div>
        
    )
}

export default Hola;