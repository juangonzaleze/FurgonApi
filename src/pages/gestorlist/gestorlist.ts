import {Component, EventEmitter, Input, Output} from "@angular/core";
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { reorderArray } from 'ionic-angular';


/**
 * Generated class for the GestorlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gestorlist',
  templateUrl: 'gestorlist.html',
})
export class GestorlistPage {
   @Input() value: string = "Calle # Esquina #";
  newValue: string;
  @Output() valueChange = new EventEmitter<string>();
  editing: boolean;
	hideMe = false;
	items = [];
	btnName: any = 'edit';
	flag: any = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GestorlistPage');
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

}
