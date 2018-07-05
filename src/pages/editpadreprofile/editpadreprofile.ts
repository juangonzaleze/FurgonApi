import { Component, EventEmitter, Input, Output} from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController  } from 'ionic-angular';
import { Http, Headers, Response } from "@angular/http";
import { Storage } from "@ionic/storage";

import { ChildprofilePage } from '../childprofile/childprofile';
import { RegistropadrePage } from '../registropadre/registropadre';
import { FormularioninoPage } from '../formularionino/formularionino';

@IonicPage()
@Component({
	selector: 'page-editpadreprofile',
	templateUrl: 'editpadreprofile.html',
})
export class EditpadreprofilePage {
	hideMe=false;
	@Input() NombreUsuario: string;
	newNombreUsuario: string;
	@Input() TlfUsuario: string;
	newTlfUsuario: string;
	@Input() DniUsuario: string;
	newDniUsuario: string;
	@Input() Email: string;
	newEmail: string;
	@Output() valueChange = new EventEmitter<string>();
	editing: boolean;
     token;
     id;
     children;

     api = 'https://furgonapp.cl/public/api/';

	constructor(
          public navCtrl: NavController,
          public navParams: NavParams,
          public http: Http, 
          public storage: Storage,
          public toastCtrl: ToastController
    ) {}

	ionViewDidLoad() {
		console.log('ionViewDidLoad EditpadreprofilePage');
          this.token = this.navParams.get('token');
          this.id = this.navParams.get('id');
          this.getPadreData();
          this.getChildrenList();
	}

	ngOnChanges(): void {
     // Nombre de Usuario
     this.newNombreUsuario = this.NombreUsuario;
     // Tlf de Usuario
     this.newTlfUsuario = this.TlfUsuario;
     // DNI de Usuario
     this.newDniUsuario = this.DniUsuario;
     // Mail de Usuario
     this.newEmail = this.Email;
 }

 startEditing(): void {
 	this.editing = true;
 	this.hideMe = true;
 }

 accept(): void {
 	this.hideMe = false;
     // Nombre de Usuario
     this.NombreUsuario = this.newNombreUsuario;
     this.valueChange.emit(this.newNombreUsuario);
     this.editing = false;
     // Tlf de Usuario
     this.TlfUsuario = this.newTlfUsuario;
     this.valueChange.emit(this.newTlfUsuario);
     this.editing = false;
     // DNI de Usuario
     this.DniUsuario = this.newDniUsuario;
     this.valueChange.emit(this.newDniUsuario);
     this.editing = false;
     // Mail de Usuario
     this.Email = this.newEmail;
     this.valueChange.emit(this.newEmail);
     this.editing = false;

     this.saveData();
 }

 cancel(): void {
 	this.hideMe = false;
     // Nombre de Usuario
     this.newNombreUsuario = this.NombreUsuario;
     this.editing = false;
     // Tlf de Usuario
     this.newTlfUsuario = this.TlfUsuario;
     this.editing = false;
     // DNI de Usuario
     this.newDniUsuario = this.DniUsuario;
     this.editing = false;
     // Mail de Usuario
     this.newEmail = this.Email;
     this.editing = false;
 }

 MoveToProfileChild(id){
 	this.navCtrl.push(ChildprofilePage, {id: id, token: this.token});
 }

 getPadreData() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('X-Requested-With', 'XMLHttpRequest');
    headers.append('Authorization', 'Bearer' + this.token);

    this.http.get(this.api + 'parents/' + this.id, { headers: headers })
      .map(res => res.json())
      .subscribe(
        data => {
          console.log(data);
          this.NombreUsuario = data.parent._profile.full_name;
          this.newNombreUsuario = data.parent._profile.full_name;
          this.TlfUsuario = data.parent._profile.phone;
          this.newTlfUsuario = data.parent._profile.phone;
          this.DniUsuario = data.parent._profile.dni;
          this.newDniUsuario = data.parent._profile.dni;
          this.Email = data.parent.email;
          this.newEmail = data.parent.email;

        },
        error => {

        }
      );
 }

 getChildrenList() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('X-Requested-With', 'XMLHttpRequest');
    headers.append('Authorization', 'Bearer' + this.token);

    this.http.get(this.api + 'children', { headers: headers })
      .map(res => res.json())
      .subscribe(
        data => {
          console.log(data);
          this.children = data.children;
        },
        error => {

        }
      );
  }

 saveData(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('X-Requested-With', 'XMLHttpRequest');
    headers.append('Authorization', 'Bearer' + this.token);

    var data = JSON.stringify({ full_name: this.newNombreUsuario, dni: this.newDniUsuario, phone: this.newTlfUsuario, email: this.newEmail });

    this.http.put(this.api + 'parents/' + this.id, data, { headers: headers })
    .map((res: Response) => res.json())
    .subscribe(
      data => { 
        this.navCtrl.push(RegistropadrePage, { token: this.token });
      },
      error => {

      }
    );
  }

  newChild(){
    this.navCtrl.push(FormularioninoPage, { padre: this.id, token: this.token });
  }

  deleteChild(id){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('X-Requested-With', 'XMLHttpRequest');
    headers.append('Authorization', 'Bearer' + this.token);

    this.http.delete(this.api + 'children/' + id, { headers: headers })
      .map(res => res.json())
      .subscribe(
        data => {
          this.toast('Se elimino con exito');
          this.getChildrenList();
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
