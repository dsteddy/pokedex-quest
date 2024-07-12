import { Routes } from '@angular/router';
import { PokedexPageComponent } from './components/pokedex-page/pokedex-page.component';
import { CreatePokemonComponent } from './components/create-pokemon/create-pokemon.component';

export const routes: Routes = [
    { path: '', component: PokedexPageComponent},
    { path: 'create', component: CreatePokemonComponent}
];
