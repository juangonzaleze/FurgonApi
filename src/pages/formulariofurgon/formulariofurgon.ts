import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, Response } from "@angular/http";
import { Storage } from "@ionic/storage";

import { RegisterfurgonPage } from '../registerfurgon/registerfurgon';


@IonicPage()
@Component({
	selector: 'page-formulariofurgon',
	templateUrl: 'formulariofurgon.html',
})
export class FormulariofurgonPage {

	token;
	Model;
	Patent;
	Color;

	api = 'https://furgonapp.cl/public/api/';

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public http: Http,
		public storage: Storage
	) {}

	ionViewDidLoad() {
		console.log('ionViewDidLoad FormulariofurgonPage');
		this.token = this.navParams.get('token');
		console.log(this.token);
	}

	saveData(){
	    let headers = new Headers();
	    headers.append('Content-Type', 'application/json');
	    headers.append('X-Requested-With', 'XMLHttpRequest');
	    headers.append('Authorization', 'Bearer' + this.token);

	    var data = JSON.stringify({ brand: this.Model, patent: this.Patent, color: this.Color });

	    this.http.post(this.api + 'furgon', data, { headers: headers })
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
