import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { Camera } from '@ionic-native/camera';
import { FileTransfer } from '@ionic-native/file-transfer';

import { LoginPageModule } from '../pages/login/login.module';
import { RegistrochildPageModule } from '../pages/registrochild/registrochild.module';
import { RegistropadrePageModule } from '../pages/registropadre/registropadre.module';
import { HomePageModule } from '../pages/home/home.module';
import { RutasPageModule } from '../pages/rutas/rutas.module';
import { GestorlistPageModule } from '../pages/gestorlist/gestorlist.module';
import { ListrecorridoPageModule } from '../pages/listrecorrido/listrecorrido.module';
import { PerfilPageModule } from '../pages/perfil/perfil.module';
import { ChildprofilePageModule } from '../pages/childprofile/childprofile.module';
import { RegisterfurgonPageModule } from '../pages/registerfurgon/registerfurgon.module';
import { FormularioninoPageModule } from '../pages/formularionino/formularionino.module';
import { FormulariopadrePageModule } from '../pages/formulariopadre/formulariopadre.module';
import { SelectcarmodalPageModule } from '../pages/selectcarmodal/selectcarmodal.module';
import { PerfilpadrePageModule } from '../pages/perfilpadre/perfilpadre.module';
import { EditpadreprofilePageModule } from '../pages/editpadreprofile/editpadreprofile.module';
import { FormulariofurgonPageModule } from '../pages/formulariofurgon/formulariofurgon.module';
import { EditfurgonPageModule } from '../pages/editfurgon/editfurgon.module';


@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    //   IonicModule.forRoot(MyApp, {
    //   backButtonText: 'Go Back',
    //   iconMode: 'ios',
    //   modalEnter: 'modal-slide-in',
    //   modalLeave: 'modal-slide-out',
    //   tabsPlacement: 'bottom',
    //   pageTransition: 'ios-transition'
    // }),
    HttpModule,
    IonicModule.forRoot(MyApp, { menuType: "overlay"} ),
    IonicStorageModule.forRoot(),
    LoginPageModule,
    HomePageModule,
    RegistrochildPageModule,
    RegistropadrePageModule,
    PerfilPageModule,
    GestorlistPageModule,
    ListrecorridoPageModule,
    RutasPageModule,
    ChildprofilePageModule,
    RegisterfurgonPageModule,
    FormularioninoPageModule,
    FormulariopadrePageModule,
    SelectcarmodalPageModule,
    PerfilpadrePageModule,
    EditpadreprofilePageModule,
    FormulariofurgonPageModule,
    EditfurgonPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    FileTransfer,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
