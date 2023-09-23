import React from "react";
import './listitem.css'
import Contador from '../Contador'
import { Link } from "react-router-dom";

const ListItem = ({data})=>{
    return(
        <div className="card">
            <div className="card-info">
                <p className="title">{data.title}</p>
                <img className="img-catalogo" src={data.image} alt="{data.title}" />
                <span>$ {data.price}</span>
                <Link className="vermas" to={`/item/${data.id}`}>Ver Mas</Link>
                <Contador item={data}/>
            </div>
        </div>
    )
}
export default ListItem