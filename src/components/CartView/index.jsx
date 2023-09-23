import './cartView.css'
import { CartContext } from '../../Context/CartContext'
import {useContext} from 'react'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem'


const CartView = () => {

    const {carro, totalPrice} = useContext(CartContext)
    if (carro.length === 0 ) {
        return(
            <div className='cartView'>
                <h1>Carrito de compras</h1>
                <p>No hay elementos en el carrito</p>
                <Link to='/' >Hacer Compras</Link>
            </div>
        )
    }
    return(
        <div className='cartView'>
            <h1>Carrito de compras</h1>
            {carro.map(prd=> <CartItem key={prd.id} product={prd} />)}
            <div className='cartViewre'>
                <p >Total: {totalPrice()}</p>
                <Link className='confirm' to='/order'>Ir a Confirmar Compra</Link>
            </div>
        </div>

    )
}

export default CartView