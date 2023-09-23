import React, { useEffect, useState, useContext } from 'react'
import './index.css'
import ListItem from '../ListItem'
import { useParams } from 'react-router-dom'
import { PrdContext } from '../../Context/ProductContext'


export const ItemListContainer = ({greeting}) => {
    const datos= useContext(PrdContext)
    const [productos, setProductos] = useState([])
    const {id} = useParams()
    useEffect(()=>{
        const productosFiltrados = datos.filter(producto => producto.categoryId === id);
        
        productosFiltrados.length> 0 ? setProductos(productosFiltrados): setProductos(datos)
    }, [datos,id]);
    return( 
        <div>
            { productos.length===0 ? <span className='loader'></span> : 
            <div className='conItemList'>
                <h1 className='titulo'>{greeting}</h1>
                <div className='conProductos'>
                    {productos.map(producto=> <ListItem key={producto.id} data={producto} />)}
                </div>
            </div>}
        </div>
        
    )
}
export default ItemListContainer