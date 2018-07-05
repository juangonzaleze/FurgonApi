import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Http, Headers } from "@angular/http";
import { Storage } from "@ionic/storage";

import { FormulariopadrePage } from '../formulariopadre/formulariopadre';
import { PerfilpadrePage } from '../perfilpadre/perfilpadre';
import { EditpadreprofilePage } from '../editpadreprofile/editpadreprofile';

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

  token;
  parents;

  api = 'https://furgonapp.cl/public/api/';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http, 
    public storage: Storage,
    public toastCtrl: ToastController
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistropadrePage');
    this.token = this.navParams.get('token');
    console.log(this.token);
    this.getParentsList();
  }

  getParentsList() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('X-Requested-With', 'XMLHttpRequest');
    headers.append('Authorization', 'Bearer' + this.token);

    this.http.get(this.api + 'parents', { headers: headers })
      .map(res => res.json())
      .subscribe(
        data => {
          console.log(data.representante);
          this.parents = data.representante;
        },
        error => {

        }
      );
  }

  deleteParent(id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('X-Requested-With', 'XMLHttpRequest');
    headers.append('Authorization', 'Bearer' + this.token);

    this.http.delete(this.api + 'parents/' + id, { headers: headers })
      .map(res => res.json())
      .subscribe(
        data => {
          this.toast('Se elimino con exito');
          this.getParentsList();
        },
        error => {

        }
      );
  }

  newPadre(){
    this.navCtrl.push(FormulariopadrePage, { token: this.token });
  }
  MoveToPerfil(){
    this.navCtrl.push(PerfilpadrePage);
  }

  EditPadre(id){
    this.navCtrl.push(EditpadreprofilePage, { token: this.token, id: id });
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
