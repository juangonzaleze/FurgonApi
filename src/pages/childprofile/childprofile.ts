import { Component, EventEmitter, Input, Output} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, Response } from "@angular/http";
import { Storage } from "@ionic/storage";

/**
 * Generated class for the ChildprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-childprofile',
  templateUrl: 'childprofile.html',
})
export class ChildprofilePage {
	hideMe=false;
   @Input() NombreUsuario: string;
   newNombreUsuario: string;
   @Input() TlfUsuario: string;
   newTlfUsuario: string;
   @Input() Direccion: string;
   newDireccion: string;
   @Input() Colegio: string;
   newColegio: string;
   @Input() Horario: string;
   newHorario: string;
   @Input() Observaciones: string;
   newObservaciones: string;
   @Output() valueChange = new EventEmitter<string>();
   editing: boolean;

     token;
     id;

     api = 'https://furgonapp.cl/public/api/';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public http: Http, 
    public storage: Storage,
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChildprofilePage');
    this.token = this.navParams.get('token');
    this.id = this.navParams.get('id');
    this.getChildData()
  }

   ngOnChanges(): void {
     // Nombre de Usuario
     this.newNombreUsuario = this.NombreUsuario;
     // Tlf de Usuario
     this.newTlfUsuario = this.TlfUsuario;
     // Direccion de Usuario
     this.newDireccion = this.Direccion;
     // Colgio de Usuario
     this.newColegio = this.Colegio;
     // Horario del Furgon
     this.newHorario = this.Horario;
     // Observaciones de Usuario
     this.newObservaciones = this.Observaciones;
   }

   startEditing(): void {
     this.editing = true;
     this.hideMe = true;
   }

   accept(): void {
     this.hideMe = false;
     // Nombre de Usuario
     this.NombreUsuario = this.newNombreUsuario;
     this.valueChange.emit(this.newNombreUsuario);
     this.editing = false;
     // Tlf de Usuario
     this.TlfUsuario = this.newTlfUsuario;
     this.valueChange.emit(this.newTlfUsuario);
     this.editing = false;
     // Direccion de Usuario
     this.Direccion = this.newDireccion;
     this.valueChange.emit(this.newDireccion);
     this.editing = false;
     // Colegio de Usuario
     this.Colegio = this.newColegio;
     this.valueChange.emit(this.newColegio);
     this.editing = false;
     // Horario del Furgon
     this.Horario = this.newHorario;
     this.valueChange.emit(this.newHorario);
     this.editing = false;
     // Observaciones de Usuario
     this.Observaciones = this.newObservaciones;
     this.valueChange.emit(this.newObservaciones);
     this.editing = false;

     this.saveData();
   }

   cancel(): void {
     this.hideMe = false;
     // Nombre de Usuario
     this.newNombreUsuario = this.NombreUsuario;
     this.editing = false;
     // Tlf de Usuario
     this.newTlfUsuario = this.TlfUsuario;
     this.editing = false;
     // Direccion de Usuario
     this.newDireccion = this.Direccion;
     this.editing = false;
     // Colegio de Usuario
     this.newColegio = this.Colegio;
     this.editing = false;
     // Horario del Furgon
     this.newHorario = this.Horario;
     this.editing = false;
     // Observaciones de Usuario
     this.newObservaciones = this.Observaciones;
     this.editing = false;
   }

   getChildData() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('X-Requested-With', 'XMLHttpRequest');
    headers.append('Authorization', 'Bearer' + this.token);

    this.http.get(this.api + 'children/' + this.id, { headers: headers })
      .map(res => res.json())
      .subscribe(
        data => {
          console.log(data);
          this.NombreUsuario = data.child.full_name;
          this.newNombreUsuario = data.child.full_name;
          this.TlfUsuario = data.child.phone;
          this.newTlfUsuario = data.child.phone;
          this.Colegio = data.child.school_id;
          this.newColegio = data.child.school_id;
          this.Observaciones = data.child.observations;
          this.newObservaciones = data.child.observations;

        },
        error => {

        }
      );
 }

 saveData(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('X-Requested-With', 'XMLHttpRequest');
    headers.append('Authorization', 'Bearer' + this.token);

    var data = JSON.stringify({ full_name: this.newNombreUsuario, phone: this.newTlfUsuario, school_id: this.newColegio, observation: this.newObservaciones });

    this.http.put(this.api + 'children/' + this.id, data, { headers: headers })
    .map((res: Response) => res.json())
    .subscribe(
      data => { 
        this.navCtrl.pop();
      },
      error => {

      }
    );
  }

}
