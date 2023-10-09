import React, { useState } from 'react'
import './order.css'
import OrderItem from '../OrderItem'

const Order = () => {
    const[name, setName]= useState('')
    const[phone, setPhone]= useState('')
    const[email, setEmail]= useState('')

    const cambiarName =(e)=> {
        let value= e.target.value
        for (let i = 0; i < value.length; i++) {
            const el = value[i];
            if (el==="1" || el==='2' || el==='3' || el==='4' || el==='5' || el==='6' || el==='7' || el==='8'|| el==='9' || el==='0') {
                value=''
                setName('')
            }else{
                setName(value)
            }
        }
        
    }
    const cambiarPhone =(e)=> {
        const value= e.target.value
        if (value.length>12) {
            setPhone('')
        }else{
            if (value>0) {
                setPhone(value)
            }else{
                setPhone('')
            }
        }
        
    }
    const cambiarEmail =(e)=> {
        const value= e.target.value
        let vali =  value.indexOf("@");
        let vali2 =  value.indexOf(".");
        if (vali !== -1 && vali2 !== -1) {
            setEmail(value)
        } 
        
    }
  return (
    <div className='center'>
        <form className='FormUsu'>
            <input  type="text" placeholder='Nombre*' required pattern="[a-z]" onChange={cambiarName} />
            <input required type="number" placeholder='Telefono*'   onChange={cambiarPhone} />
            <input required type="email" placeholder='Email*' onChange={cambiarEmail} />
        </form>
        {name==='' || phone==='' || email==='' ? <p className='UsuP'>COMPLETE SUS DATOS:</p> : <OrderItem name={name} phone={phone} email={email}/>}
    </div>
  )
}

export default Order