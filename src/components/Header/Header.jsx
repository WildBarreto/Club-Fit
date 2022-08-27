import React from "react";
import './Header.css'
import Logo from '../../assets/logo.png'
const Header = () => {
  return (
    <div className="header">
        <img src={Logo} alt="logo" className="logo" />

        <ul className="header-menu">
            <li>Home</li>
            <li>Programas</li>
            <li>Nós</li>
            <li>Planos</li>
            <li>Testemunhas</li>
        </ul>
    </div>
  );
};

export default Header;
