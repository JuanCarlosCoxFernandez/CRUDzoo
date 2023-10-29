import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateZooPage } from './update-zoo.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateZooPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateZooPageRoutingModule {}
