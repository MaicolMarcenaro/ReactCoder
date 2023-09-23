import React from 'react'
import './cartItem.css'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

const CartItem = ({product}) => {
    const {removeCart} = useContext(CartContext)
  return (
    <div className='itemCart'>
        <img src={product.image} alt="Imagen de producto" />
        <div>
            <p>Titulo: {product.title}</p>
            <p>Cantidad: {product.count}</p>
            <p>Precio: ${product.price}</p>
            <p>SubTotal: ${product.price * product.count}</p>
            <button onClick={()=>removeCart(product.id)}>Eliminar</button>
        </div>
    </div>
  )
}

export default CartItem