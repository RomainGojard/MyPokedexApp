import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';

const routes: Routes = [
  { path: 'card', component: CardComponent },
  { path: 'pokemon-list', component: PokemonListComponent },
  { path: 'capacite', redirectTo:'card', pathMatch:'full' },
  { path: '',redirectTo:'card', pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
