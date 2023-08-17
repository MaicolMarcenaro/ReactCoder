import React from 'react'
import Contador from '../Contador'
import './index.css'

export const Item = ({info}) => {

    const onAdd = (quantity) => {
        alert(`Compraste ${quantity} unidades de ${info.nombre}`)
    }

    return (
        <a href="#" className='itemCon nav-link'>
            <h2>{info.nombre}</h2>
            <img className='img' src={info.img} alt="Laptop" />
            <p>Precio: {info.precio}</p>
            <Contador onAdd={onAdd}/>
        </a>
    )
}

export default Item