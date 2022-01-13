import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private rootUrl = "https://pokemon-pichincha.herokuapp.com/pokemons/";

  constructor(private http: HttpClient) {
  }

  public getPokemons(): Observable<any> {
    return this.http.get<any>(this.rootUrl + "?idAuthor=1")
  }

  public deletePokemon(id: string): Observable<any> {
    return this.http.delete(this.rootUrl + id)
  }

  public getPokemon(id: any): Observable<any> {
    return this.http.get(this.rootUrl + id)
  }

  public addPokemon(pokemon: any): Observable<any>{
    return this.http.post(this.rootUrl + "?idAuthor=1", pokemon)
  }

  public updatePokemon(id: string, pokemon:any): Observable<any>{
    return this.http.put(this.rootUrl + id, pokemon)
  }

}
