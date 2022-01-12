import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  //private frase: Frase = { value: "", icon_url: "", id: "", url: "" };
  private rootUrl = "https://pokemon-pichincha.herokuapp.com/pokemons/";

  constructor(private http: HttpClient) {
  }

  public getPokemons(): Observable<any> {
    return this.http.get<any>(this.rootUrl + "?idAuthor=1")
  }
}
