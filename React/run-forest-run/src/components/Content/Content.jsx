import React from 'react';
import Content from'./Content.scss';
import AgentList from '../../services/agents.services'

//Images
import lupa from '../../assets/img/lupa.png';

class MainContent extends React.Component {
  render()  {
    return (
        <div>
            <div class="cover"></div>
            <div class="search">
                <h1 class="search__title">Los Mejores agentes de seguridad</h1>
                <input class="search__input" id="search_input" type="search" placeholder="Buscar por Ubicacion"></input>
                <img class="search__image" src={lupa} onClick=""></img>
            </div>
            <AgentList/>
        </div>
    );
  }
}
export default MainContent;