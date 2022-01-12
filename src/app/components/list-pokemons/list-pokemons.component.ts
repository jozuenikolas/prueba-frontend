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

        console.log("Elements:", element)

      })
    })
  }

}
