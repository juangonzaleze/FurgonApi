import { Component, EventEmitter, Input, Output} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChildprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-childprofile',
  templateUrl: 'childprofile.html',
})
export class ChildprofilePage {
	hideMe=false;
   @Input() NombreUsuario: string = "Luis Rodriguez";
   newNombreUsuario: string;
   @Input() TlfUsuario: string = "0000-000-0000";
   newTlfUsuario: string;
   @Input() Direccion: string = "Calle # Esquina #";
   newDireccion: string;
   @Input() Colegio: string = "San Jose";
   newColegio: string;
   @Input() Horario: string = "6:00am - 12:00pm";
   newHorario: string;
   @Input() Observaciones: string = "Descripción";
   newObservaciones: string;
   @Output() valueChange = new EventEmitter<string>();
   editing: boolean;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChildprofilePage');
  }

   ngOnChanges(): void {
     // Nombre de Usuario
     this.newNombreUsuario = this.NombreUsuario;
     // Tlf de Usuario
     this.newTlfUsuario = this.TlfUsuario;
     // Direccion de Usuario
     this.newDireccion = this.Direccion;
     // Colgio de Usuario
     this.newColegio = this.Colegio;
     // Horario del Furgon
     this.newHorario = this.Horario;
     // Observaciones de Usuario
     this.newObservaciones = this.Observaciones;
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
     // Colegio de Usuario
     this.Colegio = this.newColegio;
     this.valueChange.emit(this.newColegio);
     this.editing = false;
     // Horario del Furgon
     this.Horario = this.newHorario;
     this.valueChange.emit(this.newHorario);
     this.editing = false;
     // Observaciones de Usuario
     this.Observaciones = this.newObservaciones;
     this.valueChange.emit(this.newObservaciones);
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
     // Colegio de Usuario
     this.newColegio = this.Colegio;
     this.editing = false;
     // Horario del Furgon
     this.newHorario = this.Horario;
     this.editing = false;
     // Observaciones de Usuario
     this.newObservaciones = this.Observaciones;
     this.editing = false;
   }

}
