import {NavLink} from "react-router-dom";
import home from '../../assets/icons/navbar/home.svg';
import optimization from '../../assets/icons/navbar/optimization.svg';
import recleaner from '../../assets/icons/navbar/recleaner.svg';
import contact from '../../assets/icons/navbar/contact.svg';
import './_Navbar.scss'

const Navbar = () => {

    const navbarList = [
        {id: 1, images: home},
        {id: 2, images: optimization},
        {id: 3, images: recleaner},
        {id: 4, images: contact},
    ]

    return (
        <nav className="header__menu">
            <ul className="header__list">
                {navbarList.map((item) => (
                    <li key={item.id}>
                        <NavLink to={''} className={'header__link'}>
                            <img src={item.images} alt="icon" className="header__img"/>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;