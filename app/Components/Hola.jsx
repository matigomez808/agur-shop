import Image from "next/image"

export const Hola = () => {
    return (
       
            <div >
                
                <p >
                    Hola, soy Anita y soy quien esta detrás de Agur. 
                    Este es un emprendimiento de ropa interior artesanal y a medida. Con este espacio busco compartir mi vision de lo que la ropa interior y la sensualidad pueden ser. 
                    Creo que el mercado masivo no se encarga de trabajar esas ideas mas alla del marketing y la hegemonía. 
                    Y la verdad la suensualidad pasa por otros lugares en mi opninión y la ropa interior puede ser tanto más que lo que se plantea.
                     Espero aquí puedan encontrar algo que les guste. 
                     Saludos!
                </p>
                <div >
                    <Image className='pic' src="https://agurproducts.s3.us-east-005.backblazeb2.com/agurPics.jpg" alt="Esta es una foto de anita" />
                </div>
            </div>
        
    )
}