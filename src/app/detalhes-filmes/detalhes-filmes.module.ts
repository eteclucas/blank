import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhesFilmesPageRoutingModule } from './detalhes-filmes-routing.module';

import { DetalhesFilmesPage } from './detalhes-filmes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhesFilmesPageRoutingModule
  ],
  declarations: [DetalhesFilmesPage]
})
export class DetalhesFilmesPageModule {}
