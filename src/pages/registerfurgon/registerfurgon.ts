import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Http, Headers } from "@angular/http";
import { Storage } from "@ionic/storage";

import { FormulariofurgonPage } from '../formulariofurgon/formulariofurgon';
import { EditfurgonPage } from '../editfurgon/editfurgon';

@IonicPage()
@Component({
  selector: 'page-registerfurgon',
  templateUrl: 'registerfurgon.html',
})
export class RegisterfurgonPage {

  token;
  furgon;
  user;

  api = 'https://furgonapp.cl/public/api/';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http, 
    public storage: Storage,
    public toastCtrl: ToastController
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterfurgonPage');
    this.token = this.navParams.get('token');
    console.log(this.token);
    this.getFurgonList();
  }

  getFurgonList() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('X-Requested-With', 'XMLHttpRequest');
    headers.append('Authorization', 'Bearer' + this.token);

    this.http.get(this.api + 'furgon', { headers: headers })
      .map(res => res.json())
      .subscribe(
        data => {
          console.log(data);
          this.furgon = data.furgons;
          this.user = data.user;
        },
        error => {

        }
      );
  }

  MoveToFormularioFurgon(){
  	this.navCtrl.push(FormulariofurgonPage, {token: this.token});
  }
  MoveToEditFurgon(id){
    this.navCtrl.push(EditfurgonPage, {id:id, token: this.token});
  }

  deleteFurgon(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('X-Requested-With', 'XMLHttpRequest');
    headers.append('Authorization', 'Bearer' + this.token);

    this.http.delete(this.api + 'furgon/' + id, { headers: headers })
      .map(res => res.json())
      .subscribe(
        data => {
          this.toast('Se elimino con exito');
          this.getFurgonList();
        },
        error => {

        }
      );
  }

  toast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });

    toast.present();
  }

}
