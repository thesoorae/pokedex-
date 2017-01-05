import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {
  constructor(props){
    super(props);
    // this.state = { pokemon: []};

  }

  componentDidMount(){
    this.props.requestAllPokemon();

    // this.setState({pokemon: this.props.pokemon});
  }

  render(){
    const pokemon = this.props.pokemon;
    const PokemonItems = pokemon.map(poke =>
      <PokemonIndexItem key={poke.id} poke={poke}/>
    );

    return(
      <div>
        <section className="detail">
          {this.props.children}
        </section>
        <section className="pokedex">
          <ul>
            { PokemonItems }
          </ul>
        </section>
      </div>
    );
  }
}

export default PokemonIndex;
