import React, { useEffect, useState } from 'react'
import './index.css'
import ListItem from '../ListItem'
import { useParams } from 'react-router-dom'



export const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((json) => {
        const productosFiltrados = json.filter((producto) => producto.category === id);
        productosFiltrados.length> 0 ? setProductos(productosFiltrados): setProductos(json)
      });
    }, [id]);
   
    return(

        
        <div className='conItemList'>
            <h1 className='titulo'>{greeting}</h1>
            <div className='conProductos'>
                {productos.map(producto=> <ListItem key={producto.id} data={producto} />)}
            </div>
        </div>
    )
}
export default ItemListContainer