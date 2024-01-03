
export const Cart = () => {

    
    return (
        
        <div className="carrito">
            <h3>Tu carrito</h3>
            
            <ul>
                {items.map((item) => {
                    return <li key={item.id}>{item.nombre} - ${item.precio} - Cantidad: {item.quantity}</li>
                })}
                
            </ul>
            <p>Total : {precioTotal}</p>
            <button>Comprar</button>
        </div>
        
    )
}