import { Injectable } from '@angular/core';
import { Pokemon } from './Pokemon';
import { POKEMONS } from './mock-pokemon';

@Injectable()
export class PokemonService
{
  // Retourne tous les pokémons
  getPokemons(): Pokemon[] {
    return POKEMONS;
  }

  // Retourne le pokémon avec l'identifiant passé en paramètre
  getPokemon(id: number): Pokemon {
    let pokemons = this.getPokemons();

    for(let index = 0; index < pokemons.length; index++) {
      if(id === pokemons[index].id) {
        return pokemons[index];
      }
    }
  }
  //Retourne tous les types de pokemons
  getPokemonTypes(): string[] {
        return ['Plante','Feu','Eau','Insecte','Normal','Electrik','Poison','Fée', 'Vol'];
    }
}
