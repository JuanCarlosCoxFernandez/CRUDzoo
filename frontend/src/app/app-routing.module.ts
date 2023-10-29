import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'zoo',
    loadChildren: () => import('./zoo/zoo.module').then( m => m.ZooPageModule)
  },
  {
    path: 'create-zoo',
    loadChildren: () => import('./create-zoo/create-zoo.module').then( m => m.CreateZooPageModule)
  },
  {
    path: 'animaltype',
    loadChildren: () => import('./animaltype/animaltype.module').then( m => m.AnimaltypePageModule)
  },
  {
    path: 'create-animaltype',
    loadChildren: () => import('./create-animaltype/create-animaltype.module').then( m => m.CreateAnimaltypePageModule)
  },
  {
    path: 'animal',
    loadChildren: () => import('./animal/animal.module').then( m => m.AnimalPageModule)
  },
  {
    path: 'create-animal',
    loadChildren: () => import('./create-animal/create-animal.module').then( m => m.CreateAnimalPageModule)
  },
  {
    path: 'update-animal',
    loadChildren: () => import('./update-animal/update-animal.module').then( m => m.UpdateAnimalPageModule)
  },
  {
    path: 'update-zoo',
    loadChildren: () => import('./update-zoo/update-zoo.module').then( m => m.UpdateZooPageModule)
  },
  {
    path: 'update-animaltype',
    loadChildren: () => import('./update-animaltype/update-animaltype.module').then( m => m.UpdateAnimaltypePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
