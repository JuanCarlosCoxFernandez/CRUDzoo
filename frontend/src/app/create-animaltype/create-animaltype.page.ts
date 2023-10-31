import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimalService } from '../service/animal.service';

@Component({
  selector: 'app-create-animaltype',
  templateUrl: './create-animaltype.page.html',
  styleUrls: ['./create-animaltype.page.scss'],
})
export class CreateAnimaltypePage implements OnInit {

  animalTypeForm!: FormGroup;
  isSubmitted: boolean = false;

  constructor(private animalService : AnimalService,private router: Router,public formBuilder: FormBuilder) { }

  ionViewWillEnter() {
    this.animalTypeForm.reset();
    this.isSubmitted = false;
  }

  ngOnInit() {
    this.animalTypeForm = this.formBuilder.group({
      zoo_name: ['', [Validators.required]]
    })
  }

  get errorControl() {
    return this.animalTypeForm.controls;
  }

  async submitFormAnimalType() {
    this.isSubmitted = true;
    if (!this.animalTypeForm.valid) {
      console.log('Please provide all the required values!')
      
    }else{
      this.animalService.addanimaltype(this.animalTypeForm.value).subscribe(data => {
        console.log("añadido");
        this.router.navigateByUrl("/animaltype");
      })
    }
  }

}
