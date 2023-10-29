import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateAnimaltypePage } from './create-animaltype.page';

const routes: Routes = [
  {
    path: '',
    component: CreateAnimaltypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateAnimaltypePageRoutingModule {}
