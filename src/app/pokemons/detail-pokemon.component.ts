import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from './Pokemon';
import { PokemonService } from './pokemon.service';

@Component({
    selector: 'detail-pokemon',
    templateUrl: './detail-pokemon.component.html',
})
export class DetailPokemonComponent implements OnInit {
    pokemon: Pokemon = null;
    constructor(private route: ActivatedRoute, private router: Router, private pokemonService: PokemonService) {

    }
    ngOnInit(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.pokemonService.getPokemon(id)
        .subscribe(pokemon => this.pokemon = pokemon)
    }
    goBack(): void {
        this.router.navigate(['/pokemons']);
    }
    goEdit(pokemon: Pokemon): void {
      let link = ['/pokemon/edit', this.pokemon.id];
      this.router.navigate(link);
    }
}
