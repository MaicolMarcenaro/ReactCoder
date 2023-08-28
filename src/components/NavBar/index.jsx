import React from 'react'
import './index.css'
import CartWidget from '../CartWidget'
import { Link } from 'react-router-dom'


export const NavBar = () =>{
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
                        <Link className="nav-link" to='category/electronics'>electronics</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='category/jewelery'>jewelery</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="category/men's clothing">men's clothing</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="category/women's clothing">women's clothing</Link>
                    </li>
                </ul>
                <form className="d-flex"  >
                    <a className="nav-link d-flex" href="#">
                        <CartWidget />
                        <p>1</p>
                    </a>
                </form>
                </div>
            </div>
            </nav>
    )
}

export default NavBar