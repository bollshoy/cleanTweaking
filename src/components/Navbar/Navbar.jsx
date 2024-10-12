import React, {useState} from 'react';
import './_Navbar.scss'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }
    return (
        <nav className="header__menu">
            <div className={`burger ${open ? 'open' : ''}`} onClick={handleClick}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={`header__list ${open ? 'open' : ''}`}>
                <NavLink to="/" className="header__link">Главная</NavLink>
                <NavLink to="/recleaner" className="header__link">Recleaner</NavLink>
                <NavLink to="/" className="header__link">Оптимизация</NavLink>
                <NavLink to={'/buy'} className={'header__link'}>Контакты</NavLink>
            </ul>
        </nav>
    );
};

export default Navbar;