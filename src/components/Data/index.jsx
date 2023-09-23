import { db } from '../../firebase/client';
import { getDocs, collection, query, where, limit , getDoc, doc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'

const Data = () => {
    const productRef = collection(db, "items")
   

    const getProducts = async()=> {
        const data= await getDocs(productRef)
        const dataFiltrada = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
    }

    //const productRef= doc(db, "items","LdfyBuQglVtfHtDpWeLO" )

    //const getItems= ()=>{
    //    getDoc(productRef).then((snapshot => {
    //        if (snapshot.exists()){
    //            console.log({id: snapshot.id, ...snapshot.data()})
    //        }
    //    }))
    //}


    useEffect(()=>{
        getProducts()
    },[])
    return (
        <div>Data</div>
    )
}
export default Data