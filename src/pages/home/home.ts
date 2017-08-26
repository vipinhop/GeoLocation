import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from "@ionic-native/geolocation";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  loc:any = {};
  constructor(public navCtrl: NavController, public geolocation: Geolocation) {

  }
  ionViewDidLoad(){
    this.geolocation.getCurrentPosition().then((position) => {
      
           this.loc.latt=position.coords.latitude;
           this.loc.lng=position.coords.longitude;	
      
         }, (err) => {
           console.log(err);
         });
  }

}
