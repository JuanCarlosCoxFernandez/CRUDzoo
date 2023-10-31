import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnimalService } from '../service/animal.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-zoo',
  templateUrl: './create-zoo.page.html',
  styleUrls: ['./create-zoo.page.scss'],
})
export class CreateZooPage implements OnInit {

  zooForm!: FormGroup;
  isSubmitted: boolean = false;

  constructor(private animalService : AnimalService,private router: Router,public formBuilder: FormBuilder) { }

  ionViewWillEnter() {
    this.zooForm.reset();
    this.isSubmitted = false;
  }

  ngOnInit() {
    this.zooForm = this.formBuilder.group({
      zoo_name: ['', [Validators.required]]
    })
  }

  get errorControl() {
    return this.zooForm.controls;
  }

  async submitFormZoo() {
    this.isSubmitted = true;
    if (!this.zooForm.valid) {
      console.log('Please provide all the required values!')
      
    }else{
      this.animalService.addzoo(this.zooForm.value).subscribe(data => {
        console.log("añadido");
        this.router.navigateByUrl("/zoo");
      })
    }
  }
  

}


