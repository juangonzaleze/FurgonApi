import { Component, EventEmitter, Input, Output} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, Response } from "@angular/http";
import { Storage } from "@ionic/storage";

import { RegisterfurgonPage } from '../registerfurgon/registerfurgon';
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

    token;
     id;

     api = 'https://furgonapp.cl/public/api/';

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public http: Http, 
      public storage: Storage
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditfurgonPage');
    this.token = this.navParams.get('token');
    this.id = this.navParams.get('id');
    this.getFurgonData();
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

     this.saveData();
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

 getFurgonData() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('X-Requested-With', 'XMLHttpRequest');
    headers.append('Authorization', 'Bearer' + this.token);

    this.http.get(this.api + 'furgon/' + this.id, { headers: headers })
      .map(res => res.json())
      .subscribe(
        data => {
          console.log(data);
          this.Modelo = data.furgon.brand;
          this.newModelo = data.furgon.brand;
          this.Patente = data.furgon.patent;
          this.newPatente = data.furgon.patent;
          this.Color = data.furgon.color;
          this.newColor = data.furgon.color;

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

    var data = JSON.stringify({ brand: this.newModelo, patent: this.newPatente, color: this.newColor });

    this.http.put(this.api + 'furgon/' + this.id, data, { headers: headers })
    .map((res: Response) => res.json())
    .subscribe(
      data => { 
        this.navCtrl.push(RegisterfurgonPage, { token: this.token });
      },
      error => {

      }
    );
  }

}
