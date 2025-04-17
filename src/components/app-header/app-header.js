import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import './app-header.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const AppHeader = ({ total }) => {
    return (
        <header className="header">
            <Link className="header__link" to="/">
                Menu
            </Link>
            <Link className="header__link" to="/cart">
                <img className="header__cart" src={cartIcon} alt="cart"></img>
                Total: {total} $
            </Link>
        </header>
    );
};

export default AppHeader;
