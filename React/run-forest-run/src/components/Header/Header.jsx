import React from 'react';
import './Header.jsx';
import './Header.scss';
class App extends React.Component {
  render()  {
    return (
     <div class="header">
        <img class="header__logo" src="./../../assets/img/logo.png"></img>
        <img class="header__menu" src="../../assets/img/menu.png"></img>
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
export default App;