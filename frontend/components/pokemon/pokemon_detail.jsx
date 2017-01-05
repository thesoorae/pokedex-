import React from 'react';
import {Link} from 'react-router';

class PokemonDetail extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){

    this.props.requestSinglePokemon(this.props.params.pokemonId);
  }

  componentWillReceiveProps(newProps){
    if(newProps.params.pokemonId !== this.props.params.pokemonId){
    this.props.requestSinglePokemon(newProps.params.pokemonId);
    }
  }

  render(){
    const pokemonDetails = this.props.pokemonDetail;
    const moves = pokemonDetails.moves ? (pokemonDetails.moves.join(", ")) : "";
    let Items = "";
    if(pokemonDetails.items){
    Items = ( <div> <h3>Items</h3>
      <li>
        <div className="itemImages">
          <ul>
            {pokemonDetails.items.map(item => (<Link to={`/pokemon/${pokemonDetails.id}/item/${item.id}`} key={item.id}>
              <img width="50" src={item.image_url} />
              </Link>))}
          </ul>
        </div>
      </li>
    </div>);}


    return(
      <section className="pokemonDetail">
        <ul>
          <img src={pokemonDetails.image_url}/>
          <h2>{pokemonDetails.name}</h2>
          <li>Type: {pokemonDetails.poke_type}</li>
          <li>Attack: {pokemonDetails.attack}</li>
          <li>Defense: {pokemonDetails.defense}</li>
          <li>Moves: { moves }</li>
          {Items}
        </ul>
        {this.props.children}
      </section>
    );
  }
}

export default PokemonDetail;
