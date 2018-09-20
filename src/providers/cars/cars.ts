import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CarsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
  const API:string ="http://krushnamailuxurycarrental.in/api.php?action=GetCars";
  @Injectable()
  export class CarsProvider {

  	constructor(public http: HttpClient) {
  		console.log('Hello CarsProvider Provider');
  	}



  	getCars(){

  		return this.http.get(API);

  	}
  }
