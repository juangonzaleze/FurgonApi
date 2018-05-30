import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the UsereditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-useredit',
  templateUrl: 'useredit.html',
})
export class UsereditPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsereditPage');
   	this.menuCtrl.close();
  }

}
