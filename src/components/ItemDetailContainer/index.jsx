import React, { useEffect, useState } from "react";
import './itemdetailcontainer.css'
import { useParams } from "react-router-dom";
import Contador from "../Contador";

const ItemDetailsContainer = ()=> {
    const [item, setItem] = useState({})
    const {id} = useParams()
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>setItem(json))
    },[id])
    return(
        <div className="cont">
            <p class="title">{item.title}</p>
            <img className="img-catalogo" src={item.image} alt="{data.title}" />
            <p>$ {item.price}</p>
            <Contador/>
        </div>
    )
}

export default ItemDetailsContainer