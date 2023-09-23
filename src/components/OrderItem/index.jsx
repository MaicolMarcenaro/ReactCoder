import React from 'react'
import './orderItem.css'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import CartItem from '../CartItem'

const OrderItem = ({name, phone, email}) => {
    const {carro, totalPrice} = useContext(CartContext)
    const buyer={name, phone, email}
    const order={
        buyer : buyer,
        items: carro,
        total: totalPrice()
    }
    const createOrder=()=>{
        
        const db = getFirestore()
        const ordersCollection = collection(db, "orders")
        addDoc(ordersCollection, order).then(({id}) => alert(`Compra completada con exito
Su id de compra es: ${id}`))
    }
  return (
    <div className='lista'>
        <h1>Confirmar compra</h1>
        <div className='center'>
            <p>Nombre: {order.buyer.name}</p>
            <p>Phone: {order.buyer.phone}</p>
            <p>Phone: {order.buyer.email}</p>
        </div>
        {carro.map(prd=> <CartItem key={prd.id} product={prd} />)}
        <div className='cartViewre'>
            <p >Total: {totalPrice()}</p>
            <button  onClick={()=>createOrder()}>Confirmar Compra</button>
        </div>
    </div>
  )
}

export default OrderItem