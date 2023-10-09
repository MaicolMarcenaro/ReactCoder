import { useState, createContext, useEffect } from "react";

import { db } from "../firebase/client";
import { getDocs, collection } from 'firebase/firestore';

export const PrdContext= createContext()


export const ProductContext = ({children})=>{
    const [productos, setProductos] = useState([])
    const productRef = collection(db, "items")
   

    const getProducts = async()=> {
        const data= await getDocs(productRef)
        const dataFiltrada = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
        setProductos(dataFiltrada)
    }
    useEffect(()=>{
        getProducts()
    },[])

    return <PrdContext.Provider value={
        productos
    }>
        {children}
    </PrdContext.Provider>
}
