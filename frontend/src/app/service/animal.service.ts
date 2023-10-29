import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/x-www-form-urlencoded'
  })
}
@Injectable({
  providedIn: 'root'
})


export class AnimalService {
  endpointA= "http://localhost:8080/animal";
  endpointZ= "http://localhost:8080/zoo";
  endpointAT= "http://localhost:8080/animaltype";

  constructor(private httpClient: HttpClient) { }

  getzoo(){
    return this.httpClient.get(this.endpointZ);
  }

  getanimal(){
    return this.httpClient.get(this.endpointA);
  }

  getanimaltype(){
    return this.httpClient.get(this.endpointAT);
  }

  deletezoo(id:string){
    return this.httpClient.delete(this.endpointZ+`/${id}`,httpOptions);
  }

  deleteanimal(id:string){
    return this.httpClient.delete(this.endpointA+`/${id}`,httpOptions);
  }

  deleteanimaltype(id:string){
    return this.httpClient.delete(this.endpointAT+`/${id}`,httpOptions);
  }

  addzoo(zoo:any) {
    let body = new URLSearchParams();
    body.append("name", zoo.zoo_name);
    return this.httpClient.post(this.endpointZ,body,httpOptions);
  }

  addanimal(animal:any) {
    let body = new URLSearchParams();
    body.append("name", animal.name);
    body.append("zoo", animal.zoo);
    body.append("animalType", animal.animalType);
    return this.httpClient.post(this.endpointA,body,httpOptions);
  }

  addanimaltype(animaltype:any) {
    let body = new URLSearchParams();
    body.append("type_name", animaltype.type_name);
    return this.httpClient.post(this.endpointAT,body,httpOptions);
  }

  updatezoo(id:string,zoo:any){
    let body = new URLSearchParams();
    body.append("name", zoo.zoo_name);
    return this.httpClient.put(this.endpointZ+`/${id}`,body,httpOptions);
  }

  updateanimal(id:string,animal:any){
    let body = new URLSearchParams();
    body.append("name", animal.name);
    body.append("zoo", animal.zoo);
    body.append("animalType", animal.animalType);
    return this.httpClient.put(this.endpointA+`/${id}`,body,httpOptions);
  }

  updateanimaltype(id:string,animaltype:any){
    let body = new URLSearchParams();
    body.append("type_name", animaltype.type_name);
    return this.httpClient.put(this.endpointAT+`/${id}`,body,httpOptions);
  }
}
