import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
	selector: 'page-formulariofurgon',
	templateUrl: 'formulariofurgon.html',
})
export class FormulariofurgonPage {



	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad FormulariofurgonPage');
	}


}
