import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartStateInt } from '../redux/reducers/cart';

const Navbar = (): JSX.Element =>
{
    const cartProducts: cartStateInt[] = useSelector((state: any) => state.cart);
    const [activeState, setActiveState] = useState('Home');

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <Link className="navbar-brand" to="/"><img src='../img/logo.png' alt="" /></Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link onClick={() => setActiveState('Home')} className={`nav-link ${activeState === 'Home' ? 'active' : null}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={() => setActiveState('Collection')} className={`nav-link ${activeState === 'Collection' ? 'active' : null}`} to="/collection">Collection</Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={() => setActiveState('Cart')} className={`nav-link ${activeState === 'Cart' ? 'active' : null}`} to="/cart">Cart({cartProducts ? cartProducts.length : 0})</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;