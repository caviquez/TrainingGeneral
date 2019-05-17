import React from 'react';
//Images
import certified from '../../assets/img/certified.png'
import chuck from '../../assets/img/imagechuck.png'


class Item extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.name,
            description: props.description,
            rate: props.rate,
            hours: props.hours,
            certified: props.certified
        }
    }

    render() {
        return (
            <div className="agent-container__agent-item">
                <div className="agent-container__agent-item__header">
                    <h2 className="agent-container__agent-item__header__agent-name">{this.state.name}</h2>
                    {this.state.certified && <img src={certified}></img>}
                </div>
                <div className="agent-container__agent-item__body" >
                    <img src={chuck}></img>
                    <p className="agent-container__agent-item__body__agent-description">{this.state.description}</p>
                </div>
                <div className="agent-container__agent-item__footer">
                    <h2 className="agent-container__agent-item__footer__price-description">Desde $ {this.state.rate} {this.state.hours}/hrs</h2>
                    <button className="agent-container__agent-item__footer__btn-buy" type="button">Contratar</button>
                </div>
            </div>
        );
    }
}
export default Item;
