import { Component, OnInit } from '@angular/core';
import {PokemonService} from "../../service/pokemon.service";

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.component.html',
  styleUrls: ['./list-pokemons.component.scss']
})
export class ListPokemonsComponent implements OnInit {

  pokemons: any[] = [];

  constructor(
    private _pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.getPokemons()
  }

  getPokemons(){
    this._pokemonService.getPokemons().subscribe((data) =>{
      this.pokemons = [];
      data.forEach((element:any)=>{
        this.pokemons.push({
          id: element["id"],
          name: element["name"],
          image: element["image"],
          type: element["type"],
          attack: element["attack"],
          defense: element["defense"]
        })
      })
    })
  }

}
