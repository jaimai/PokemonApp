import { Injectable } from '@angular/core';
import { Pokemon } from './Pokemon';
import { POKEMONS } from './mock-pokemon';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable()
export class PokemonService
{
  constructor(private http: HttpClient){ }
  private pokemonsUrl = 'api/pokemons';

  private log(log: string){
    console.info(log);
  }

  private handleError<T>(operation = 'operation' , result?: T){
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  // Retourne tous les pokémons
  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonsUrl).pipe(
      tap(_ => this.log(`fetched pokemons`)),
      catchError(this.handleError(`getPokemons`, []))
    );
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
