import { useState, createContext, useEffect } from "react";
//agregafo
import { db } from "../firebase/client";
import { getDocs, collection } from 'firebase/firestore';
//fin
export const PrdContext= createContext()


export const ProductContext = ({children})=>{
    const [productos, setProductos] = useState([])
    // useEffect(()=>{
    //     fetch('https://fakestoreapi.com/products')
    //     .then((res) => res.json())
    //     .then((json) => setProductos(json));
    // }, []);
//nuevo
    const productRef = collection(db, "items")
   

    const getProducts = async()=> {
        const data= await getDocs(productRef)
        const dataFiltrada = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
        setProductos(dataFiltrada)
    }
    useEffect(()=>{
        getProducts()
    },[])
//fin
    return <PrdContext.Provider value={
        productos
    }>
        {children}
    </PrdContext.Provider>
}
