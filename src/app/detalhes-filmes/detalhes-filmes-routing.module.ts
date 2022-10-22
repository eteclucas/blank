import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhesFilmesPage } from './detalhes-filmes.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhesFilmesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhesFilmesPageRoutingModule {}
