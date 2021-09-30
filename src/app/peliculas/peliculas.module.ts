import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeliculasPageRoutingModule } from './peliculas-routing.module';

import { PeliculasPage } from './peliculas.page';

import { ComponentsModule } from '../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeliculasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PeliculasPage]
})
export class PeliculasPageModule {}
