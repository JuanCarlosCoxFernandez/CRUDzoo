import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnimalService } from '../service/animal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-animal',
  templateUrl: './create-animal.page.html',
  styleUrls: ['./create-animal.page.scss'],
})
export class CreateAnimalPage implements OnInit {

  animalForm!: FormGroup;
  isSubmitted: boolean = false;

  constructor(private animalService : AnimalService,private router: Router,public formBuilder: FormBuilder) { }

  ionViewWillEnter() {
    this.animalForm.reset();
    this.isSubmitted = false;
  }

  ngOnInit() {
    this.animalForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      zoo: ['', [Validators.required]],
      animalType: ['', [Validators.required]]
    })
  }

  get errorControl() {
    return this.animalForm.controls;
  }

  async submitFormAnimal() {
    this.isSubmitted = true;
    if (!this.animalForm.valid) {
      console.log('Please provide all the required values!')
      
    }else{
      this.animalService.addanimal(this.animalForm.value).subscribe(data => {
        console.log("añadido");
        this.router.navigateByUrl("/animal");
      })
    }
    }

}
