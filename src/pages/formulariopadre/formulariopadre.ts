import { Component } from '@angular/core';
import { IonicPage, Platform, ToastController, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, Response } from "@angular/http";
import { Storage } from "@ionic/storage";
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer } from '@ionic-native/file-transfer';

import { RegistropadrePage } from '../registropadre/registropadre';

/**
 * Generated class for the FormulariopadrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-formulariopadre',
  templateUrl: 'formulariopadre.html',
})
export class FormulariopadrePage {

    token;
    Email;
    Phone;
    Dni;
    Name;
    Username;
    Password;
    imgPreview:string = null;
    image: string = null;

    api = 'https://furgonapp.cl/public/api/';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public transfer: FileTransfer,
    public camera: Camera,
    public toastCtrl: ToastController,
    public platform: Platform,
    public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormulariopadrePage');
    this.token = this.navParams.get('token');
  }

  saveData(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('X-Requested-With', 'XMLHttpRequest');
    headers.append('Authorization', 'Bearer' + this.token);

    var data = JSON.stringify({ full_name: this.Name, dni: this.Dni, phone: this.Phone, email: this.Email });

    this.http.post(this.api + 'parents', data, { headers: headers })
    .map((res: Response) => res.json())
    .subscribe(
      data => { 
        this.image = '';
        this.imgPreview = null;
        this.navCtrl.push(RegistropadrePage, { token: this.token });
      },
      error => {

      }
    );
  }

  takePicture(){

    if ( !this.platform.is('cordova') ){
      this.mostrar_toast('Error: No estamos en un dispositivo')
      return;
    }

    const options: CameraOptions = {
        quality: 35,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        correctOrientation: true,
      saveToPhotoAlbum: true
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.imgPreview = 'data:image/jpeg;base64,' + imageData;
      this.image = imageData;

    }, (err) => {
      // Handle error
      this.mostrar_toast ( "Error" + err)
      console.error('Error en la camara', + err);
    });
  }

    lookingPhoto(){

      if ( !this.platform.is('cordova') ){
        this.mostrar_toast('Error: No estamos en un dispositivo')
        return;
      }

      const options: CameraOptions = {
        quality: 35,
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        encodingType: this.camera.EncodingType.JPEG,
        correctOrientation: true,
        saveToPhotoAlbum: false
      }

      this.camera.getPicture(options).then((imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64:
        this.imgPreview = 'data:image/jpeg;base64,' + imageData;
        this.image = imageData;
        
      }, (err) => {
         // Handle error
         this.mostrar_toast ( "Error" + err)
         console.error('Error en la camara', + err);
       }
     );
  }

  private mostrar_toast ( text: string) {
    this.toastCtrl.create({
      message: text,
      duration: 2500,
    }).present();
  }

}
