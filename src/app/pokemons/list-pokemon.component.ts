import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Pokemon } from './Pokemon';
 import { Router } from '@angular/router';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'list-pokemon',
  templateUrl: './list-pokemon.component.html',
  providers: [PokemonService]
})
export class ListPokemonComponent implements OnInit {
  pokemons: Pokemon[];
  leTitle = 'poketitre';
  constructor(private rooter: Router, private pokemonService: PokemonService) { }
  ngOnInit(): void {
    this.pokemons = this.pokemonService.getPokemons();
  }
  selectPokemon(pokemon: Pokemon) {
    alert('vous avez cliqué sur : ' + pokemon.name);
    let link = ['/pokemon',pokemon.id];
    this.rooter.navigate(link);
  }
}
