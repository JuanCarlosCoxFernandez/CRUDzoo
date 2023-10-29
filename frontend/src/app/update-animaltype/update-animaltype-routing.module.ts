import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateAnimaltypePage } from './update-animaltype.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateAnimaltypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateAnimaltypePageRoutingModule {}
