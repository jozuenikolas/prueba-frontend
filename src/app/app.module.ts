import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modules
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListPokemonsComponent } from './components/list-pokemons/list-pokemons.component';
import { CreatePokemonComponent } from './components/create-pokemon/create-pokemon.component';

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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
