import { Component, OnInit } from '@angular/core';
import {PokemonService} from "../../service/pokemon.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.component.html',
  styleUrls: ['./list-pokemons.component.scss']
})
export class ListPokemonsComponent implements OnInit {

  pokemons: any[] = [];
  completePokemons: any[] = [];
  inputValue: string = ""

  constructor(
    private _pokemonService: PokemonService,
    private toastr: ToastrService,
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
      this.completePokemons = this.pokemons
    })
  }

  updatesPokemons(event:any){
    this.inputValue = event.target.value.trim().toLowerCase()
    if(this.inputValue != ""){
      this.pokemons = this.completePokemons.filter(x => x.name.toLowerCase().startsWith(this.inputValue));
    } else {
      this.pokemons = this.completePokemons
    }
  }

  deletePokemon(event:any, id: string){
    this._pokemonService.deletePokemon(id).subscribe((data) =>{
      this.toastr.error(
        'El pokemon fue eliminado con éxito',
        'Pokemon eliminado!',
        {positionClass: 'toast-bottom-right'}
      );
      this.inputValue = ""
      this.getPokemons()
    })
  }

}
