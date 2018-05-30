import { Component } from '@angular/core';
import { IonicPage , NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FormularioninoPage } from '../formularionino/formularionino';
import { ChildprofilePage } from '../childprofile/childprofile';

@IonicPage()
@Component({
  selector: 'page-registrochild',
  templateUrl: 'registrochild.html',
})
export class RegistrochildPage {
shownGroup = null;


constructor(
  public navCtrl: NavController,
  public formBuilder: FormBuilder
  ) {

}

toggleGroup(group) {
  if (this.isGroupShown(group)) {
    this.shownGroup = null;
  } else {
    this.shownGroup = group;
  }
};
isGroupShown(group) {
  return this.shownGroup === group;
};
MoveToPage(){
  this.navCtrl.push(FormularioninoPage);
}
MoveToPerfil(){
  this.navCtrl.push(ChildprofilePage);
}

}