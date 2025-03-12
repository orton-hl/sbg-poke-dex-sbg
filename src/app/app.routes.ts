import { Routes } from '@angular/router';
import {PokemonListComponent} from './pages/pokemon-list/pokemon-list.component';
import {PokemonDetailsComponent} from './pages/pokemon-details/pokemon-details.component';

export const routes: Routes = [
  { path: '', redirectTo: 'pokemon-list', pathMatch: 'full' },
  { path: 'pokemon-list', component: PokemonListComponent },
  { path: 'pokemon-details/:name', component: PokemonDetailsComponent },
];
