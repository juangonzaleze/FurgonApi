import {Component, EventEmitter, Input, Output} from "@angular/core";
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { reorderArray } from 'ionic-angular';
/**
 * Generated class for the ListrecorridoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-listrecorrido',
 	templateUrl: 'listrecorrido.html',
 })
 export class ListrecorridoPage {
 	@Input() value: string = "Calle # Esquina #";
 	newValue: string;
 	@Output() valueChange = new EventEmitter<string>();
 	editing: boolean;
 	hideMe = false;
 	items = [];
 	btnName: any = 'edit';
 	flag: any = false;
  testCheckboxOpen;
  testCheckboxResult;

 	constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad ListrecorridoPage');
 	}

   reorderItems(indexes) {
     this.items = reorderArray(this.items, indexes);
   }
   actionBtn(){
     if(this.btnName == 'edit')
     {
       this.btnName = 'Done';
       this.flag    = true;
       this.hideMe = false;
     }
     else
     {
       this.btnName = 'edit';
       this.flag    = false;
       this.hideMe = true;
     }
   };
   ngOnChanges(): void {
     this.newValue = this.value;
   }

   startEditing(): void {
     this.editing = true;
   }

   accept(): void {
     this.value = this.newValue;
     this.valueChange.emit(this.newValue);
     this.editing = false;
   }

   cancel(): void {
     this.newValue = this.value;
     this.editing = false;
   }

   Agregar() {
     let alert = this.alertCtrl.create();
     alert.setTitle('Agregar Niño');

     alert.addInput({
       type: 'checkbox',
       label: 'Juan Gonzales',
       value: 'value1',
     });

     alert.addInput({
       type: 'checkbox',
       label: 'Jennifer Perez',
       value: 'value2'
     });

     alert.addButton('Cancelar');
     alert.addButton({
       text: 'Agregar',
       handler: data => {
         console.log('Checkbox data:', data);
         this.testCheckboxOpen = false;
         this.testCheckboxResult = data;
       }
     });
     alert.present();
   }

   AgregarEscuela() {
     let alert = this.alertCtrl.create();
     alert.setTitle('Agregar Escuela');

     alert.addInput({
       type: 'checkbox',
       label: 'Escuela 1',
       value: 'value1',
     });

     alert.addInput({
       type: 'checkbox',
       label: 'Escuela 2',
       value: 'value2'
     });

     alert.addButton('Cancelar');
     alert.addButton({
       text: 'Agregar',
       handler: data => {
         console.log('Checkbox data:', data);
         this.testCheckboxOpen = false;
         this.testCheckboxResult = data;
       }
     });
     alert.present();
   }


 }
