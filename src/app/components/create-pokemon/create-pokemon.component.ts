import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PokemonService} from "../../service/pokemon.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-create-pokemon',
  templateUrl: './create-pokemon.component.html',
  styleUrls: ['./create-pokemon.component.scss']
})
export class CreatePokemonComponent implements OnInit {

  pokemonForm: FormGroup
  submited = false;
  id: string | null;
  title: string = "Agregar"
  attack = "50"
  defense = "50"

  constructor(
    private fb: FormBuilder,
    private _pokemonService: PokemonService,
    private aRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
  ) {
    this.pokemonForm = this.fb.group({
      name: ['', [Validators.required]],
      image: ['', [Validators.required]],
      type: ['', [Validators.required]],
      attack: ['', [Validators.required]],
      defense: ['', [Validators.required]],
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar()
  }

  esEditar(){
    if(this.id != null){
      this.title = "Editar"
      this._pokemonService.getPokemon(this.id).subscribe((data) => {
        this.pokemonForm.patchValue({
          name: data.name,
          image: data.image,
          type: data.type,
          attack: data.attack,
          defense: data.defense,
        })
        this.attack = this.pokemonForm.value.attack
        this.defense = this.pokemonForm.value.defense

      })
    }
  }

  onInputDefense(event: any){
    this.defense = event.target.value.trim().toLowerCase()
  }

  onInputAttack(event: any){
    this.attack = event.target.value.trim().toLowerCase()
  }

  addOrUpdatePokemon(){
    this.submited = true
    if(this.pokemonForm.invalid){
      return;
    }
    if(this.id === null){
      this.addPokemon()
    }else{
      this.updatePokemon(this.id)
    }
  }

  addPokemon(){
    let pokemon = {
      name: this.pokemonForm.value.name,
      image: this.pokemonForm.value.image,
      type: this.pokemonForm.value.type,
      hp: 99,
      attack: this.pokemonForm.value.attack,
      defense: this.pokemonForm.value.defense,
      idAuthor: 1
    }

    this._pokemonService.addPokemon(pokemon).subscribe((data) => {
      this.toastr.success(
        'El pokemon fue registrado con éxito',
        'Pokemon registrado!',
        { positionClass: 'toast-bottom-right' }
      );

      this.router.navigate(['/list-pokemons']);
    })
  }

  updatePokemon(id: string){
    let pokemon = {
      name: this.pokemonForm.value.name,
      image: this.pokemonForm.value.image,
      type: this.pokemonForm.value.type,
      hp: 99,
      attack: this.pokemonForm.value.attack,
      defense: this.pokemonForm.value.defense,
      idAuthor: 1
    }

    this._pokemonService.updatePokemon(id, pokemon).subscribe((data) =>{
      this.toastr.info(
        'El pokemon fue modificado con éxito',
        'Pokemon modificado!',
        { positionClass: 'toast-bottom-right' }
      );
      this.router.navigate(['/list-pokemons']);
    })

  }


}
