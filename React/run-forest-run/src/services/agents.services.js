import React from 'react';

//Images
import certified from '../assets/img/certified.png'
import chuck from '../assets/img/imagechuck.png'

export default class AgentList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { agent: [] };
  }

  componentDidMount() {
    this.AgentList();
  }

  AgentList() {
    fetch('https://api.myjson.com/bins/uptto')
      .then(res => res.json())
      .then((data) => {
        this.setState({
          agent : data.companies
        })
      })
  }

  render() {
    const agents = this.state.agent.map((agent) => (
      <div>
        <div className="agent-container" id="agent-container">
            <div className="agent-container__agent-item"></div>
                <div className="agent-container__agent-item__header">
                    <h2 className="agent-container__agent-item__header__agent-name">{agent.name}</h2>
                    <img src={certified}></img>
                </div>

                <div className="agent-container__agent-item__body" >
                    <img src={chuck}></img>
                    <p className="agent-container__agent-item__body__agent-description">{agent.description}</p>
                    
                </div>

            <div className="agent-container__agent-item__footer">
                    <h2 className="agent-container__agent-item__footer__price-description">Desde $ {agent.rate} {agent.hours}/hrs</h2>
                    <button className="agent-container__agent-item__footer__btn-buy" type="button">Contratar</button>
            </div>
          </div>
      </div>
    ));

    return (
      <div className="agent-container" id="layout-content" >
        { agents }
      </div>
    );
  }
}
