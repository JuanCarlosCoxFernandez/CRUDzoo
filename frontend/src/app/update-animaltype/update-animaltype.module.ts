import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateAnimaltypePageRoutingModule } from './update-animaltype-routing.module';

import { UpdateAnimaltypePage } from './update-animaltype.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UpdateAnimaltypePageRoutingModule
  ],
  declarations: [UpdateAnimaltypePage]
})
export class UpdateAnimaltypePageModule {}
