import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListPokemonsComponent} from "./components/list-pokemons/list-pokemons.component";
import {CreatePokemonComponent} from "./components/create-pokemon/create-pokemon.component";

const routes: Routes = [
  {path:'', redirectTo: 'list-pokemons', pathMatch: 'full'},
  {path: 'list-pokemons', component: ListPokemonsComponent},
  {path:'create-pokemon', component: CreatePokemonComponent},
  {path:'edit-pokemon/:id', component: CreatePokemonComponent},
  {path:'**', redirectTo: 'list-pokemons', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
