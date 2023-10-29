import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimaltypePageRoutingModule } from './animaltype-routing.module';

import { AnimaltypePage } from './animaltype.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimaltypePageRoutingModule
  ],
  declarations: [AnimaltypePage]
})
export class AnimaltypePageModule {}
