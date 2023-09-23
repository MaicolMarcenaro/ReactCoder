import React, { useState } from 'react'
import './order.css'
import OrderItem from '../OrderItem'

const Order = () => {
    const[name, setName]= useState('')
    const[phone, setPhone]= useState('')
    const[email, setEmail]= useState('')

    const cambiarName =(e)=> {
        const value= e.target.value
        setName(value)
    }
    const cambiarPhone =(e)=> {
        const value= e.target.value
        setPhone(value)
    }
    const cambiarEmail =(e)=> {
        const value= e.target.value
        setEmail(value)
    }
  return (
    <div className='center'>
        <form className='FormUsu'>
            <input type="text" placeholder='Nombre*' onChange={cambiarName} />
            <input type="number" placeholder='Telefono*' onChange={cambiarPhone} />
            <input type="email" placeholder='Email*' onChange={cambiarEmail} />
        </form>
        {name==='' || phone==='' || email==='' ? <p className='UsuP'>COMPLETE SUS DATOS:</p> : <OrderItem name={name} phone={phone} email={email}/>}
    </div>
  )
}

export default Order