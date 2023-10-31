import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimalService } from '../service/animal.service';

@Component({
  selector: 'app-update-animal',
  templateUrl: './update-animal.page.html',
  styleUrls: ['./update-animal.page.scss'],
})
export class UpdateAnimalPage implements OnInit {

  name!: String;
  zoo!:String;
  animalType!:String;
  UpdateanimalForm!: FormGroup;
  isSubmitted: boolean = false;

  constructor(private animalService : AnimalService,private router: Router,public formBuilder: FormBuilder,) { }

  ionViewWillEnter() {
    this.UpdateanimalForm.reset();
    this.isSubmitted = false;
  }

  ngOnInit() {
    this.UpdateanimalForm = this.formBuilder.group({
      zoo_name: ['', [Validators.required]]
    })
  }

  getAnimalById(){
    this.animalService.getzoobyid(localStorage.getItem("animal_id")).subscribe((response: any)=> {
      this.name = response.name;
      this.zoo = response.zoo;
      this.animalType = response.animalType;
    });
  }

  get errorControl() {
    return this.UpdateanimalForm.controls;
  }

  async submitFormAnimalUpdate() {
    this.isSubmitted = true;
    if (!this.UpdateanimalForm.valid) {
      console.log('Please provide all the required values!')
      
    }else{
      console.log(localStorage.getItem("animal_id"));
      this.animalService.updateanimal(localStorage.getItem("animal_id"),this.UpdateanimalForm.value).subscribe(data => {
        console.log("añadido");
        this.router.navigateByUrl("/animal");
      })
    }
  }

}
