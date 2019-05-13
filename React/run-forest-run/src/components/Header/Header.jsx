import React from 'react';
import './Header.scss';
//Images
import logo from '../../assets/img/logo.png';
import menu from '../../assets/img/menu.png';

class Header extends React.Component {
  render()  {
    return (
     <div class="header">
        <img class="header__logo" src={logo}></img>
        <img class="header__menu" src={menu}></img>
        <nav class="header__nav">
            <ul class="header__nav__items">
                <li><a href="#">Directorios de agentes</a></li>
                <li><a href="#">Contacto</a></li>
                <li><a href="#">Ingresar</a></li>
            </ul>
        </nav>
     </div>
       
    );
  }
}
export default Header;