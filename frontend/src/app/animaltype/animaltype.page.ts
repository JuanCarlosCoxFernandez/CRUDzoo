import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../service/animal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animaltype',
  templateUrl: './animaltype.page.html',
  styleUrls: ['./animaltype.page.scss'],
})
export class AnimaltypePage implements OnInit {

  animaltypes:any = [];

  constructor(private animalService : AnimalService,private router: Router) { }

  ngOnInit() {
    this.getAllAnimalTypes();
  }

  getAllAnimalTypes(){
    this.animalService.getanimaltype().subscribe(response => {
      this.animaltypes = response;
    })
  }

  gotoCreateAnimalType(){
    this.router.navigateByUrl("/create-animaltype");
  }

  gotoUpdateAnimaltype(id:string){
    localStorage.setItem("animal_type_id",id);
    this.router.navigateByUrl("/update-animaltype");
  }

  deleteAnimaltype(id:any){
    this.animalService.deleteanimaltype(id).subscribe(response => {
      this.animaltypes = response;
    })
    location.reload();
  }

}
