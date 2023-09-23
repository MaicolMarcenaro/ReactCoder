import { useState, createContext } from "react";


export const CartContext= createContext()


export const CarritoContext = ({children})=>{
    const [carro, setCarro] = useState([])
    
    const addCarro = (item, count)=>{
        let newCarro
        let prod= carro.find(product => product.id=== item.id)
        if (prod) {
            prod.count += count
            newCarro = [...carro]
        } else {
            prod= {...item, count: count}
            newCarro = [...carro, prod]
        }
        setCarro(newCarro)
       
    }

    const totalPrice= ()=>{
        return carro.reduce((prev, act) => prev + act.count * act.price , 0)
    }
    const totalProducts= ()=> carro.reduce((acumulador, productoActual)=> acumulador + productoActual.count, 0)

    const clearCart= ()=> setCarro([])

    const removeCart= (id)=> setCarro(carro.filter(prd => prd.id !== id))

    return <CartContext.Provider value={
        {
        addCarro,
        clearCart,
        removeCart,
        totalPrice,
        totalProducts,

        carro
    }
    }>
        {children}
    </CartContext.Provider>
}
