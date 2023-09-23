import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";

const Contador = ({item}) =>{
    const {addCarro}= useContext(CartContext)
    const [cont, setContador] = useState(0)
    const des = ()=>{
        setContador(cont - 1)
    }
    const inc = ()=>{
        setContador(cont + 1)
    }

    return(
        <div className="con">
            <div className='contador'>
                <button disabled={cont < 1} onClick={des}> - </button>
                <span> {cont} </span>
                <button onClick={inc}> + </button>
            </div>
            <button disabled={cont<1} onClick={()=>addCarro(item , cont)} className="btn-carrito">Agregar al carrito</button>
            
        </div>
    )
}

export default Contador
