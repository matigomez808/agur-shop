import React from "react"
import Link from 'next/link'

const Boton = (style, linkTo, children) => {
    return(
         <Link className={style} href={{linkTo}}>{children}</Link>
    )
}

export default Boton;