import { Injectable } from '@angular/core';
import { Pokemon } from './Pokemon';
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

  /** PUT: update the pokemon on the server */
  updatePokemon(pokemon: Pokemon): Observable<any> {
		const httpOptions = {
			headers: new HttpHeaders({ 'Content-Type': 'application/json' })
		};

		return this.http.put(this.pokemonsUrl, pokemon, httpOptions).pipe(
			tap(_ => this.log(`updated pokemon id=${pokemon.id}`)),
			catchError(this.handleError<any>('updatePokemon'))
		);
	}

  /** DELETE pokemon */
  deletePokemon(pokemon: Pokemon): Observable<Pokemon>{
    const url = `${this.pokemonsUrl}/${pokemon.id}`
    const httpOptions = {
			headers: new HttpHeaders({ 'Content-Type': 'application/json' })
		};

		return this.http.delete<Pokemon>(url, httpOptions).pipe(
			tap(_ => this.log(`deleted pokemon id=${pokemon.id}`)),
			catchError(this.handleError<Pokemon>('deletePokemon'))
		);
  }
  
  /* GET pokemons search */
  searchPokemon(term: string): Observable<Pokemon[]> {
    if(!term.trim()){
      // si le terme de recherche n'existe pas, on renvoie un tableau vide.
      return of([])
    }
		return this.http.get<Pokemon[]>(`api/pokemons/?name=${term}`).pipe(
			tap(_ => this.log(`found pokemons matching "${term}"`)),
			catchError(this.handleError<Pokemon[]>('searchPokemons', []))
		);
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
			catchError(this.handleError('getPokemons', []))
		);
	}

  // Retourne le pokémon avec l'identifiant passé en paramètre
  getPokemon(id: number): Observable<Pokemon> {
  		const url = `${this.pokemonsUrl}/${id}`;

  		return this.http.get<Pokemon>(url).pipe(
  			tap(_ => this.log(`fetched pokemon id=${id}`)),
  			catchError(this.handleError<Pokemon>(`getPokemon id=${id}`))
  		);
  	}
  //Retourne tous les types de pokemons
  getPokemonTypes(): string[] {
        return ['Plante','Feu','Eau','Insecte','Normal','Electrik','Poison','Fée', 'Vol'];
    }
}
