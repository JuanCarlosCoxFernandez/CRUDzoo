import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../service/animal.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-zoo',
  templateUrl: './update-zoo.page.html',
  styleUrls: ['./update-zoo.page.scss'],
})
export class UpdateZooPage implements OnInit {
  zoo_name!: String;
  UpdatezooForm!: FormGroup;
  isSubmitted: boolean = false;

  constructor(private animalService : AnimalService,private router: Router,public formBuilder: FormBuilder) { }

  ionViewWillEnter() {
    this.UpdatezooForm.reset();
    this.isSubmitted = false;
  }

  ngOnInit() {
    this.UpdatezooForm = this.formBuilder.group({
      zoo_name: ['', [Validators.required]]
    })
  }


  getZookById(){
    this.animalService.getzoobyid(localStorage.getItem("zoo_id")).subscribe((response: any)=> {
      this.zoo_name = response.name;
    });
  }

  get errorControl() {
    return this.UpdatezooForm.controls;
  }

  async submitFormZooUpdate() {
    this.isSubmitted = true;
    if (!this.UpdatezooForm.valid) {
      console.log('Please provide all the required values!')
      
    }else{
      console.log(localStorage.getItem("zoo_id"));
      this.animalService.updatezoo(localStorage.getItem("zoo_id"),this.UpdatezooForm.value).subscribe(data => {
        console.log("añadido");
        this.router.navigateByUrl("/zoo");
      })
    }
  }

}
