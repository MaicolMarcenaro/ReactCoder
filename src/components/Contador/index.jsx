import React, { useState } from "react";

const Contador = ({onAdd}) =>{
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
             <button disabled={cont<1} /*onClick={()=>onAdd(cont)} */ className="btn-carrito">Agregar al carrito</button>
        </div>
    )
}

export default Contador