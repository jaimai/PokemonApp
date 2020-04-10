import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Pokemon } from './Pokemon';
import { POKEMONS } from './mock-pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pokemons: Pokemon[];
  leTitle = 'poketitre';
  ngOnInit(): void {
    this.pokemons = POKEMONS;
  }
  selectPokemon(pokemon: Pokemon) {
    alert('vous avez cliqué sur : ' + pokemon.name);
  }
}
