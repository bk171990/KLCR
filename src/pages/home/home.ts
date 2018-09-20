import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CarsProvider } from '../../providers/cars/cars';
import 'rxjs/add/operator/map';
import { BooknowPage } from '../booknow/booknow';


@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})


export class HomePage {



	
  
 slides = [
    {
      title: "Welcome to the Docs!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "assets/imgs/Build-a-taxi-booking-app-850x460.png",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/imgs/cabs-without-apps-696x392.png",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/imgs/taxi-booking-app4-e1487137662507.png",
    }
  ];




public allCars: Array<any> = [];
	constructor(public navCtrl: NavController,public carProvider: CarsProvider) {
		


	}

	ionViewDidLoad(){
 
           
		this.carProvider.getCars().subscribe( (data:any)  => {

			this.allCars = data.productlist;

			});
   



	}


	OpenBookPage(){

this.navCtrl.push(BooknowPage);


	}




}
