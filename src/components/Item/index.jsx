import React from 'react'
import './index.css'

export const Item = () => {
    return (
        <a href="#" className='itemCon nav-link'>
            <img className='img' src="https://i.pinimg.com/564x/16/82/40/168240b4a74b4ffb28f179acd7daeca4.jpg" alt="Laptop" />
            <p>Precio: $500</p>
        </a>
    )
}

export default Item