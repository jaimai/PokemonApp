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
        this.pokemon = this.pokemonService.getPokemon(id);
    }
    goBack(): void {
        this.router.navigate(['/pokemons']);
    }
}
