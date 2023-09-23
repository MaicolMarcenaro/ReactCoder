import React from 'react'
import './index.css'
import CartWidget from '../CartWidget'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'


export const NavBar = () =>{
    const {totalProducts} = useContext(CartContext)
    return(
        <nav className="navbar navbar-expand-lg bg-pri">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>
                 <img className='imgLogo' src="../../tiendamaik.png" alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='category/Camisas'>Camisas</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='category/Pantalones'>Pantalones</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="category/Zapatos">Zapatos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="category/Lentes">Lentes</Link>
                    </li>
                </ul>
                <form className="d-flex"  >
                    <Link className="nav-link d-flex" to='cart'>
                        <CartWidget />
                        <p>{totalProducts()}</p>
                    </Link>
                </form>
                </div>
            </div>
            </nav>
    )
}

export default NavBar