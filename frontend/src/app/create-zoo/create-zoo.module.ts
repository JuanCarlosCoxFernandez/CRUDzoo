import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateZooPageRoutingModule } from './create-zoo-routing.module';

import { CreateZooPage } from './create-zoo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateZooPageRoutingModule
  ],
  declarations: [CreateZooPage]
})
export class CreateZooPageModule {}
