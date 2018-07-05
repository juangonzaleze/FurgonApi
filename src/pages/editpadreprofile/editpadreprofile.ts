import { Component, EventEmitter, Input, Output} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ChildprofilePage } from '../childprofile/childprofile';

@IonicPage()
@Component({
	selector: 'page-editpadreprofile',
	templateUrl: 'editpadreprofile.html',
})
export class EditpadreprofilePage {
	hideMe=false;
	@Input() NombreUsuario: string = "Juan Gonzales";
	newNombreUsuario: string;
	@Input() TlfUsuario: string = "0000-000-0000";
	newTlfUsuario: string;
	@Input() DniUsuario: string = "0123456";
	newDniUsuario: string;
	@Input() Email: string = "Padre@Gmail.com";
	newEmail: string;
	@Output() valueChange = new EventEmitter<string>();
	editing: boolean;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad EditpadreprofilePage');
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

 MoveToProfileChild(){
 	this.navCtrl.push(ChildprofilePage);
 }


}
