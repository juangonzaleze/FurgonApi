import { Component } from '@angular/core';
import { IonicPage , NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-formularionino',
  templateUrl: 'formularionino.html',
})
export class FormularioninoPage {

  myForm: FormGroup;
  
  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder
  ) {
    this.myForm = this.createMyForm();
  }
  
  saveData(){
    console.log(this.myForm.value);
  }
  
  private createMyForm(){
    return this.formBuilder.group({
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      establecimiento: ['', Validators.required],
      retiro: ['', Validators.required],
      llegada: ['', Validators.required],
      // gender: ['', Validators.required],
    });
  }
}