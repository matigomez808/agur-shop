import React from "react"

const Boton = (style, onClick, children) => {
    return(
        <Button style={style} onClick={onClick} >{children}</Button>
    )
}

export default Boton;