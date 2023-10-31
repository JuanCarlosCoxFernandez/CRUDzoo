import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateAnimaltypePageRoutingModule } from './create-animaltype-routing.module';

import { CreateAnimaltypePage } from './create-animaltype.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CreateAnimaltypePageRoutingModule
  ],
  declarations: [CreateAnimaltypePage]
})
export class CreateAnimaltypePageModule {}
