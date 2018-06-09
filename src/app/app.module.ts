import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { LoginPageModule } from '../pages/login/login.module';
import { RegistrochildPageModule } from '../pages/registrochild/registrochild.module';
import { HomePageModule } from '../pages/home/home.module';
import { RutasPageModule } from '../pages/rutas/rutas.module';
import { GestorlistPageModule } from '../pages/gestorlist/gestorlist.module';
import { ListrecorridoPageModule } from '../pages/listrecorrido/listrecorrido.module';
import { PerfilPageModule } from '../pages/perfil/perfil.module';
import { ChildprofilePageModule } from '../pages/childprofile/childprofile.module';
import { RegisterfurgonPageModule } from '../pages/registerfurgon/registerfurgon.module';
import { FormularioninoPageModule } from '../pages/formularionino/formularionino.module';


@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, { menuType: "overlay"} ),
    LoginPageModule,
    HomePageModule,
    RegistrochildPageModule,
    PerfilPageModule,
    GestorlistPageModule,
    ListrecorridoPageModule,
    RutasPageModule,
    ChildprofilePageModule,
    RegisterfurgonPageModule,
    FormularioninoPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
