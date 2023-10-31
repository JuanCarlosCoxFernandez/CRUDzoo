import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimalService } from '../service/animal.service';

@Component({
  selector: 'app-update-animaltype',
  templateUrl: './update-animaltype.page.html',
  styleUrls: ['./update-animaltype.page.scss'],
})
export class UpdateAnimaltypePage implements OnInit {

  type_name!: String;
  UpdateanimalTypeForm!: FormGroup;
  isSubmitted: boolean = false;

  constructor(private animalService : AnimalService,private router: Router,public formBuilder: FormBuilder) { }

  ionViewWillEnter() {
    this.UpdateanimalTypeForm.reset();
    this.isSubmitted = false;
  }

  ngOnInit() {
    this.UpdateanimalTypeForm = this.formBuilder.group({
      zoo_name: ['', [Validators.required]]
    })
  }

  getAnimalTypeById(){
    this.animalService.getzoobyid(localStorage.getItem("animal_type_id")).subscribe((response: any)=> {
      this.type_name = response.type_name;
    });
  }

  get errorControl() {
    return this.UpdateanimalTypeForm.controls;
  }

  async submitFormAnimalTypeUpdate() {
    this.isSubmitted = true;
    if (!this.UpdateanimalTypeForm.valid) {
      console.log('Please provide all the required values!')
      
    }else{
      console.log(localStorage.getItem("animal_type_id"));
      this.animalService.updateanimaltype(localStorage.getItem("animal_type_id"),this.UpdateanimalTypeForm.value).subscribe(data => {
        console.log("añadido");
        this.router.navigateByUrl("/animaltype");
      })
    }
  }

}
