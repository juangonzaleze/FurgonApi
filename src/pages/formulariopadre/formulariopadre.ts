import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


/**
 * Generated class for the FormulariopadrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-formulariopadre',
  templateUrl: 'formulariopadre.html',
})
export class FormulariopadrePage {

	  myForm: FormGroup;


  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder) {
  	 this.myForm = this.createMyForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormulariopadrePage');
  }

   saveData(){
    console.log(this.myForm.value);
  }
  
  private createMyForm(){
    return this.formBuilder.group({
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      dni: ['', Validators.required],
      email: ['', Validators.required]
      // gender: ['', Validators.required],
    });
  }

}
