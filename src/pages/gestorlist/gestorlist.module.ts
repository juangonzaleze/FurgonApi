import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GestorlistPage } from './gestorlist';

@NgModule({
  declarations: [
    GestorlistPage,
  ],
  imports: [
    IonicPageModule.forChild(GestorlistPage),
  ],
})
export class GestorlistPageModule {}
