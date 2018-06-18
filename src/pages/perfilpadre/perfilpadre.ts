import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FormularioninoPage } from '../formularionino/formularionino';
import { ChildprofilePage } from '../childprofile/childprofile';

/**
 * Generated class for the PerfilpadrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfilpadre',
  templateUrl: 'perfilpadre.html',
})
export class PerfilpadrePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilpadrePage');
  }
  MoveToPage(){
  	this.navCtrl.push(FormularioninoPage);
  }
  MoveToProfileChild(){
  	this.navCtrl.push(ChildprofilePage);
  }

}
