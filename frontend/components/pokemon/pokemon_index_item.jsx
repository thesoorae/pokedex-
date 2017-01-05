import React from 'react';
import {Link} from 'react-router';

class PokemonIndexItem extends React.Component{
  render(){
    return (
      <li key={this.props.poke.id}>
        <Link  to={`/pokemon/${this.props.poke.id}`}>
        {this.props.poke.name}
        <img src={this.props.poke.image_url} />
        </Link>
        </li>
    );
  }
}

export default PokemonIndexItem;
