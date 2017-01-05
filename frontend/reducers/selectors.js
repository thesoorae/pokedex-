import {values} from 'lodash';

export const selectAllPokemon = (state) => (
  values(state.pokemon)
);

export const getSingleItem = (state, id) => {
  let result = {};
  state.pokemonDetail.items.forEach((item) => {if(item.id == id){
  result = item;
  }});
  return result;
};
