import React, { useContext, useEffect, useState } from "react";
import './itemdetailcontainer.css'
import { useParams } from "react-router-dom";
import Contador from "../Contador";
import { PrdContext } from "../../Context/ProductContext";

const ItemDetailsContainer = ()=> {
    const datos = useContext(PrdContext)
    const [item, setItem] = useState({})
    const {id} = useParams()
    useEffect(()=>{
        setItem(datos.find((prd)=>prd.id===id))
    },[datos,id])
    return(
        <div>
            { item.length===0 ? <span className='loader'></span> :
            <div className="cont">
                <p className="title">{item.title}</p>
                <img className="img-catalogo" src={item.image} alt="{data.title}" />
                <p>$ {item.price}</p>
                <Contador item={item}/>
            </div>}
        </div>
    )
}

export default ItemDetailsContainer