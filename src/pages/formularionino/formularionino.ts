import { Component } from '@angular/core';
import { IonicPage , NavController, NavParams } from 'ionic-angular';
import { Http, Headers, Response } from "@angular/http";
import { Storage } from "@ionic/storage";
/*import { FormBuilder, FormGroup, Validators } from '@angular/forms';*/

@IonicPage()
@Component({
  selector: 'page-formularionino',
  templateUrl: 'formularionino.html',
})
export class FormularioninoPage {

  /*myForm: FormGroup;*/
  Name;
  Phone;
  Colegio;
  Address1;
  Address2;
  Observation;

  padre;
  token;

  api = 'https://furgonapp.cl/public/api/';
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public storage: Storage
    /*public formBuilder: FormBuilder*/
  ) {
    /*this.myForm = this.createMyForm();*/
  }

  ionViewDidLoad(){
    this.token = this.navParams.get('token');
    this.padre = this.navParams.get('padre');
  }
  
  saveData(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('X-Requested-With', 'XMLHttpRequest');
    headers.append('Authorization', 'Bearer' + this.token);

    var data = JSON.stringify({ full_name: this.Name, phone: this.Phone, destination_address: this.Address1, arrival_address: this.Address2, status: 'ok', school_id: this.Colegio, user_id: this.padre });

    this.http.post(this.api + 'children', data, { headers: headers })
    .map((res: Response) => res.json())
    .subscribe(
      data => { 
        this.navCtrl.pop();
      },
      error => {

      }
    );
  }
  
  /*private createMyForm(){
    return this.formBuilder.group({
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      establecimiento: ['', Validators.required],
      retiro: ['', Validators.required],
      llegada: ['', Validators.required],
      // gender: ['', Validators.required],
    });
  }*/
}