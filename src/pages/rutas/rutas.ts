import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@IonicPage()
@Component({
	selector: 'page-rutas',
	templateUrl: 'rutas.html',
})
export class RutasPage {
  section: string = 'one';
  hideMe = false;
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  zoomControl: boolean;
  mapTypeControl: boolean;
  scaleControl: boolean;
  streetViewControl: boolean;
  rotateControl: boolean;
  fullscreenControl: boolean


  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl: MenuController,public geolocation: Geolocation) {
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad RutasPage');
    this.loadMap();
    this.menuCtrl.close();

  }
  
  loadMap(){

    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeControl: true,
        zoomControl: true,
        zoomControlOptions: {
          position: google.maps.ControlPosition.LEFT_CENTER
        },
        streetViewControl: true,
        streetViewlOptions: {
          position: google.maps.ControlPosition.LEFT_BOTTOM
        },
        fullscreenControl: true,
        fullscreenControlOptions: {
          position: google.maps.ControlPosition.LEFT_CENTER
        },
        mapTypeControlOptions: {
          style: google.maps.MapTypeControlStyle.DEFAULT
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      
    }, (err) => {
      console.log(err);
    });
    
  }

  addMarker(){

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });
    
    let content = "<h4>Information!</h4>";         
    
    this.addInfoWindow(marker, content);
    
  }

  addInfoWindow(marker, content){

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
    
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
    
  }

  hide() {
    this.hideMe = true;
  }


}
