import React from 'react';
import ReactDOM from 'react-dom';
import {fetchAllPokemon, fetchSinglePokemon} from './util/api_util';
import {receiveAllPokemon, requestAllPokemon, requestSinglePokemon} from './actions/pokemon_actions';
import configureStore from './store/store';
import {selectAllPokemon, getSingleItem} from './reducers/selectors';
import Root from './components/root';


const store = configureStore();

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});

window.fetchAllPokemon = fetchAllPokemon;
window.receiveAllPokemon = receiveAllPokemon;
window.requestAllPokemon = requestAllPokemon;
window.selectAllPokemon = selectAllPokemon;
window.fetchSinglePokemon = fetchSinglePokemon;
window.requestSinglePokemon = requestSinglePokemon;
window.getSingleItem = getSingleItem;
window.store = store;
