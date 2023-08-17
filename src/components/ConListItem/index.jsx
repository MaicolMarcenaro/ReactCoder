import React, { useEffect, useState } from "react";
import ListItem from "../ListItem";

const items = [
    {   
        id:1,
        nombre: "Mac",
        img:"https://i.pinimg.com/564x/16/82/40/168240b4a74b4ffb28f179acd7daeca4.jpg",
        precio: 500,
        categoria: "computadoras"
    },
    {   
        id:1,
        nombre: "Mouse",
        img:"https://diginet.com.uy/wp-content/uploads/2022/03/61UxfXTUyvL._AC_SL1500_.jpg",
        precio: 85,
        categoria: "mouse"
    },
    {   
        id:1,
        nombre: "Mac",
        img:"https://i.pinimg.com/564x/16/82/40/168240b4a74b4ffb28f179acd7daeca4.jpg",
        precio: 500,
        categoria: "computadoras"
    }
]
const ConListItem = () => {

    const [data, setData] = useState([])

    useEffect(() =>{
        const getData= new Promise(resolve => {
            setTimeout(() => {
                resolve(items)
            }, 1000);
        })
        getData.then(res => setData(res))
    },[])



    return(
        <>
            <ListItem data={data} />
        </>
    )
}

export default ConListItem