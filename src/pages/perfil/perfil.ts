import { Component, EventEmitter, Input, Output} from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import { UsereditPage } from '../useredit/useredit';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
   selector: 'page-perfil',
   templateUrl: 'perfil.html',
 })
 export class PerfilPage {
   hideMe=false;
   @Input() NombreUsuario: string = "Nombre Usuario";
   newNombreUsuario: string;
   @Input() TlfUsuario: string = "04265501495";
   newTlfUsuario: string;
   @Input() Direccion: string = "Calle # Esquina #";
   newDireccion: string;
   @Input() Estado: string = "Portuguesa";
   newEstado: string;
   @Input() Mail: string = "Usuario@Gmail.com";
   newMail: string;
   @Output() valueChange = new EventEmitter<string>();
   editing: boolean;


   constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl: MenuController) {
   }

   ionViewDidLoad() {
     console.log('ionViewDidLoad PerfilPage');
     this.menuCtrl.close();
   }

   EditPerfil(){
     this.navCtrl.push(UsereditPage);
   }

   ngOnChanges(): void {
     // Nombre de Usuario
     this.newNombreUsuario = this.NombreUsuario;
     // Tlf de Usuario
     this.newTlfUsuario = this.TlfUsuario;
     // Direccion de Usuario
     this.newDireccion = this.Direccion;
     // Estado de Usuario
     this.newEstado = this.Estado;
     // Mail de Usuario
     this.newMail = this.Mail;
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
     // Direccion de Usuario
     this.Direccion = this.newDireccion;
     this.valueChange.emit(this.newDireccion);
     this.editing = false;
     // Estado de Usuario
     this.Estado = this.newEstado;
     this.valueChange.emit(this.newEstado);
     this.editing = false;
     // Mail de Usuario
     this.Mail = this.newMail;
     this.valueChange.emit(this.newMail);
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
     // Direccion de Usuario
     this.newDireccion = this.Direccion;
     this.editing = false;
     // Estado de Usuario
     this.newEstado = this.Estado;
     this.editing = false;
     // Mail de Usuario
     this.newMail = this.Mail;
     this.editing = false;
   }
 }
