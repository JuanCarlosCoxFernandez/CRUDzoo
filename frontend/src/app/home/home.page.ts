import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  gotoZoo(){
    this.router.navigateByUrl("/zoo");
  }

  gotoAnimalType(){
    this.router.navigateByUrl("/animaltype");
  }

  gotoAnimal(){
    this.router.navigateByUrl("/animal");
  }
}
