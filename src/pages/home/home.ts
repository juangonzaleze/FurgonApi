import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import { RutasPage } from '../rutas/rutas';
import { RegistrochildPage } from '../registrochild/registrochild';
import { GestorlistPage } from '../gestorlist/gestorlist';
import { RegisterfurgonPage } from '../registerfurgon/registerfurgon';


@IonicPage()
@Component({
	selector: 'page-home',
	templateUrl: 'home.html',
})
export class HomePage {


  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl: MenuController) {
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.menuCtrl.close();
  }

  GoToRutas(){
  	this.navCtrl.push(RutasPage)
  }
  openRegistro(){
    this.navCtrl.push(RegistrochildPage)
  }
  opengestor(){
    this.navCtrl.push(GestorlistPage)
  }
  openregister(){
    this.navCtrl.push(RegisterfurgonPage)
  }
 


}
