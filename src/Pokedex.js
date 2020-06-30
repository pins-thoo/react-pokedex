import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
  render() {
    let title;
    if(this.props.isWinner) {
      title = <h1 className="Pokedex-winner">WINNER</h1>;
    } else {
      title = <h1 className="Pokedex-loser">LOSER</h1>;
    }
    const pokecard = this.props.pokemon.map((p) =>
      <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
    );
    return (
      <div className="Pokedex">
        {title}
        <h4>TOTAL EXP: {this.props.exp}</h4>
        <div className="Pokedex-cards">
          {pokecard}
        </div>
      </div>
    );
  }
}

export default Pokedex;
