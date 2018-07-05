import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Http, Headers } from "@angular/http";
import { JwtHelper } from "angular2-jwt";
import { Storage } from "@ionic/storage";

import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  disable: boolean;

  Email;
  Password;
  token;
  error;
  jwtHelper = new JwtHelper();

  api = 'https://furgonapp.cl/public/api/';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http, 
    public storage: Storage,
    public toastCtrl: ToastController
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  ionViewWillEnter() {
    this.authenticate();
  }

  MoveToHome(){
    this.navCtrl.setRoot(HomePage);
  }

  keytab(event) {
    let element = event.srcElement.nextElementSibling; // get the sibling element

    if(element == null)  // check if its null
        return;
    else
        element.focus();   // focus if not null
  }

  login() {
    /*var loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: '<img src="assets/spinner3.gif"/>',
      dismissOnPageChange: false
    });
    loading.present();*/

    let headers = new Headers();
    /*headers.append('Authorization', 'Basic Z29vZGNvbWV4OmNvbWV4MDA=');*/
    headers.append('Content-Type', 'application/json');

    var credentials = JSON.stringify({ email: this.Email, password: this.Password });
    this.http.post(this.api + 'login', credentials, { headers: headers })
      .map(res => res.json())
      .subscribe(
        data => { 
          this.authSuccess(data.token);
/*          this.events.publish('user:login', data.access_token, data.user);*/
          this.navCtrl.setRoot(HomePage, { token: this.token });
          /*loading.dismiss();*/
        },
        err => {
          /*loading.dismiss();*/
          if (err.status == 401){
            this.toast('Credenciales Incorrectas');
          } else if (err.status == 500) {
            this.toast('Ocurrio un error');
          } else {
            this.toast('Ocurrio un error');
          }
        },
      );
  }

  authenticate() {
    this.storage.get('token').then( data => {
      if(data != null) {
        if(data == 'token_expired') {

        }
        else if(data == undefined) {

        }
        else {
          this.navCtrl.setRoot(HomePage, { token: data });
        }
      }
    });
  }

  authSuccess(token) {
    this.error = null;
    this.storage.set('token', token);
    this.token = token;
    var sub = this.jwtHelper.decodeToken(token).sub;
    this.storage.set('profile', sub);
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
