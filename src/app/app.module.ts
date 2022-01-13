import { NgModule } from '@angular/core';

//Modules
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from "@angular/forms";

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListPokemonsComponent } from './components/list-pokemons/list-pokemons.component';
import { CreatePokemonComponent } from './components/create-pokemon/create-pokemon.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {Toast, ToastrModule} from "ngx-toastr";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListPokemonsComponent,
    CreatePokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
