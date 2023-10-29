import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateZooPageRoutingModule } from './update-zoo-routing.module';

import { UpdateZooPage } from './update-zoo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateZooPageRoutingModule
  ],
  declarations: [UpdateZooPage]
})
export class UpdateZooPageModule {}
