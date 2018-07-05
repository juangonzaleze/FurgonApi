import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FormulariofurgonPage } from '../formulariofurgon/formulariofurgon';
import { EditfurgonPage } from '../editfurgon/editfurgon';

@IonicPage()
@Component({
  selector: 'page-registerfurgon',
  templateUrl: 'registerfurgon.html',
})
export class RegisterfurgonPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterfurgonPage');
  }

  MoveToFormularioFurgon(){
  	this.navCtrl.push(FormulariofurgonPage);
  }
  MoveToEditFurgon(){
    this.navCtrl.push(EditfurgonPage);
  }

}
