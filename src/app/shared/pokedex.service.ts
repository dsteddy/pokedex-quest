import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './pokemon-mock';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private pokemons: Pokemon[] = POKEMONS;

  constructor() {}

  getPokemons(): Pokemon[] {
    return this.pokemons;
  }

  addPokemon(pokemon: Pokemon) {
    this.pokemons.push(pokemon)
  }
  
}
