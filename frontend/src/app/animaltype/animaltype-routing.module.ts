import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimaltypePage } from './animaltype.page';

const routes: Routes = [
  {
    path: '',
    component: AnimaltypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimaltypePageRoutingModule {}
