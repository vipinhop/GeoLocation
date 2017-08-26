import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import { Geolocation } from "@ionic-native/geolocation";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  loc:any = {};

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public geolocation: Geolocation) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
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

