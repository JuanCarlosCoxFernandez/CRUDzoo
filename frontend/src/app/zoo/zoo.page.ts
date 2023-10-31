import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../service/animal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.page.html',
  styleUrls: ['./zoo.page.scss'],
})
export class ZooPage implements OnInit {

  zoos: any = [];

  constructor(private animalService : AnimalService,private router: Router) { }

  ngOnInit() {
    this.getAllZoo();
  }

  getAllZoo(){
    this.animalService.getzoo().subscribe(response => {
      this.zoos = response;
    });
  }

  gotoCreateZoo(){
    this.router.navigateByUrl("/create-zoo");
  }

  gotoUpdateZoo(id:any){
    localStorage.setItem("zoo_id",id);
    this.router.navigateByUrl("/update-zoo");
  }

  deleteZoo(id:string){
    this.animalService.deletezoo(id).subscribe(response => {
      this.zoos = response;
    })
    location.reload();
  }

}
