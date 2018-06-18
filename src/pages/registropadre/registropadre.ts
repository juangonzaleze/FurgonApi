import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FormulariopadrePage } from '../formulariopadre/formulariopadre';
import { PerfilpadrePage } from '../perfilpadre/perfilpadre';

/**
 * Generated class for the RegistropadrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registropadre',
  templateUrl: 'registropadre.html',
})
export class RegistropadrePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistropadrePage');
  }

  MoveToPage(){
  	this.navCtrl.push(FormulariopadrePage);
  }
  MoveToPerfil(){
    this.navCtrl.push(PerfilpadrePage);
  }

}
