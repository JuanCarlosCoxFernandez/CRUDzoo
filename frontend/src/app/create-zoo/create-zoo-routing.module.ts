import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateZooPage } from './create-zoo.page';

const routes: Routes = [
  {
    path: '',
    component: CreateZooPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateZooPageRoutingModule {}
