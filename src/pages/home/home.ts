import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import { RutasPage } from '../rutas/rutas';
import { RegistropadrePage } from '../registropadre/registropadre';
import { GestorlistPage } from '../gestorlist/gestorlist';
import { RegisterfurgonPage } from '../registerfurgon/registerfurgon';
import { PerfilpadrePage } from '../perfilpadre/perfilpadre';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  token;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.menuCtrl.close();
    this.token = this.navParams.get('token');
    console.log(this.token);
  }

  GoToRutas(){
    this.navCtrl.push(RutasPage)
  }
  openRegistro(){
    this.navCtrl.push(RegistropadrePage, { token: this.token });
  }
  opengestor(){
    this.navCtrl.push(GestorlistPage)
  }
  openregister(){
    this.navCtrl.push(RegisterfurgonPage, { token: this.token })
  }
  openRegistronino(){
    this.navCtrl.push(PerfilpadrePage)
  }
 
}
