import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {}

  showAlert() {
    let alert = this.alertCtrl.create({
      title:'Alert',
      subTitle: 'You are turning off the light',
      buttons: ['OK']
    });
    alert.present();
  }

}


