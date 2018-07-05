import { Component, EventEmitter, Input, Output} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EditfurgonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editfurgon',
  templateUrl: 'editfurgon.html',
})
export class EditfurgonPage {
	hideMe=false;
	@Input() Modelo: string = "Peugeot Expert 2009";
	newModelo: string;
	@Input() Patente: string = "00D00";
	newPatente: string;
	@Input() Color: string = "Blanco";
	newColor: string;
	@Output() valueChange = new EventEmitter<string>();
	editing: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditfurgonPage');
  }

  ngOnChanges(): void {
     // Modelo de Vehiculo
     this.newModelo = this.Modelo;
     // Patente de Vehiculo
     this.newPatente = this.Patente;
     // Color de Vehiculo
     this.newColor = this.Color;
 }

 startEditing(): void {
 	this.editing = true;
 	this.hideMe = true;
 }

 accept(): void {
 	this.hideMe = false;
     // Modelo de Vehiculo
     this.Modelo = this.newModelo;
     this.valueChange.emit(this.newModelo);
     this.editing = false;
     // Patente de Vehiculo
     this.Patente = this.newPatente;
     this.valueChange.emit(this.newPatente);
     this.editing = false;
     // Color de Vehiculo
     this.Color = this.newColor;
     this.valueChange.emit(this.newColor);
     this.editing = false;
 }

 cancel(): void {
 	this.hideMe = false;
     // Modelo de Vehiculo
     this.newModelo = this.Modelo;
     this.editing = false;
     // Patente de Vehiculo
     this.newPatente = this.Patente;
     this.editing = false;
     // Color de Vehiculo
     this.newColor = this.Color;
     this.editing = false;
 }

}
