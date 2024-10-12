import React from 'react';
import './_Header.scss'
import Navbar from "../Navbar/Navbar.jsx";

const Header = () => {
    return (
        <header className="header">
            <div className="header__container container">
                <div className="header__logo">
                    <a href="#" className="logo">CleanTweaking</a>
                </div>
                <Navbar/>
            </div>
            <div className="header__line"></div>
        </header>
    );
};

export default Header;