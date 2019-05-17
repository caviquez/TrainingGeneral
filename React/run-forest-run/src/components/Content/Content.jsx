import React from 'react';
import './Content.scss';
import AgentService from '../../Server/apiCalls'
import Item from '../../components/Card/item'

//Images
import lupa from '../../assets/img/lupa.png'

class MainContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { agent: [], filter: ''};
    this.handleChange = this.handleChange.bind(this);

  }

  componentWillMount() {
    this.getAgents();
  }
  /** */
  getAgents() {
    AgentService.getAgents()
      .then((response) => {
        this.setState({ agent: response.data.companies })
      })
  }
  /**
   * This is a fun,.
   * @param {object} pEvent 
   */
  handleChange(pEvent) {
    if(pEvent.target.value.length > 2) {

      this.setState({
        filter : pEvent.target.value
      })
    }else{
      this.setState({
        filter : ''
      })
    }
  }

  render() {
  
    const agents = this.state.agent.filter(agent => agent.name.toLowerCase().includes(this.state.filter.toLowerCase())).map((agent) => (
      
      <Item name = {agent.name} description = {agent.description} rate = {agent.rate} hours = {agent.hours} certified = {agent.isCertified}/>
      
    ));

    return (
      <div>
        <div class="cover"></div>
        <div class="search">
          <h1 class="search__title">Los Mejores agentes de seguridad</h1>
          <input class="search__input" id="search_input" type="search" onChange = {(e) => {this.handleChange(e)}} placeholder="Buscar por Ubicacion"/>
          <img class="search__image" src={lupa} onclick=""/>
      </div>
            <div className="agent-container" id="agent-container">
              {agents}
            </div>
      </div>
          );
        }
      
      }
      export default MainContent;
      
    