import {Component, EventEmitter, Input, Output} from "@angular/core";
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { reorderArray } from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
import 'rxjs/add/operator/map'

import { ListrecorridoPage } from '../listrecorrido/listrecorrido';

@IonicPage()
@Component({
  selector: 'page-gestorlist',
  templateUrl: 'gestorlist.html',
})
export class GestorlistPage {
  information: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,private http: Http) {
    let localData = http.get('assets/information.json').map(res => res.json().items);
    localData.subscribe(data => {
      this.information = data;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GestorlistPage');
  }
   showPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Crear Lista',
      message: "Introduce el nombre de la Lista",
      cssClass: 'alertCustomCss',
      inputs: [
        {
          name: 'Titulo',
          placeholder: 'Nombre de la Lista'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Guardar',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

   toggleSection(i) {
    this.information[i].open = !this.information[i].open;
  }
 
  toggleItem(i, j) {
    this.information[i].children[j].open = !this.information[i].children[j].open;
  }
  MoveToList(){
    this.navCtrl.push('ListrecorridoPage')
  }
}
