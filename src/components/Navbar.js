import React from "react";
import {NavLink} from 'react-router-dom';

export const Navbar = () => {
    return(
        <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
        <div className="navbar-brand p-1">
            Note App
        </div> 
        <ul className="navbar-nav p-1">
            <li className="nav-item">
                <NavLink className="nav-link"  to="/" exact>Главная</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link"  to="/about">Информация</NavLink>
            </li>
        </ul>
    </nav>
    )
} 