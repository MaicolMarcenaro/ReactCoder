import { db } from '../../firebase/client';
import { getDocs, collection, query, where, limit , getDoc, doc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'

const Data = () => {
    const productRef = collection(db, "items")
   

    const getProducts = async()=> {
        const data= await getDocs(productRef)
        const dataFiltrada = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
    }



    useEffect(()=>{
        getProducts()
    },[])
    return (
        <div>Data</div>
    )
}
export default Data