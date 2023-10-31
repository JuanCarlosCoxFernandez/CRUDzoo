import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../service/animal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.page.html',
  styleUrls: ['./animal.page.scss'],
})
export class AnimalPage implements OnInit {

  animals:any = [];

  constructor(private animalService : AnimalService,private router: Router) { }

  ngOnInit() {
    this.getAllAnimal();
  }

  getAllAnimal(){
    this.animalService.getanimal().subscribe(response => {
      this.animals=response;
    });
  }

  gotoCreateAnimal(){
    this.router.navigateByUrl("/create-animal");
  }

  gotoUpdateAnimal(id:any){
    localStorage.setItem("animal_id",id);
    this.router.navigateByUrl("/update-animal");
  }

  deleteAnimal(id:string){
    this.animalService.deleteanimal(id).subscribe(response => {
      this.animals = response;
    })
    location.reload();
  }

}
