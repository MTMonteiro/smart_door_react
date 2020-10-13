import React from 'react';
// import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './style.css'

function Header(){
    return(
        <header>
            <nav>
                <ul>
                    <li><NavLink to="/salas">Minhas Salas</NavLink></li>
                    <li><NavLink to="/acesso">Acesso</NavLink></li>
                    <li><NavLink to="/">Sair</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;