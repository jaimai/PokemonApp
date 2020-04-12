import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Pokemon } from './Pokemon';
import { POKEMONS } from './mock-pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'list-pokemon',
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent implements OnInit {
  pokemons: Pokemon[];
  leTitle = 'poketitre';
  constructor(private rooter: Router){}
  ngOnInit(): void {
    this.pokemons = POKEMONS;
  }
  selectPokemon(pokemon: Pokemon) {
    alert('vous avez cliqué sur : ' + pokemon.name);
    let link = ['/pokemon',pokemon.id];
    this.rooter.navigate(link);
  }
}
