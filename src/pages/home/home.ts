import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController } from 'ionic-angular';

declare var google;
var map, infoWindow;

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad(){
    this.initMap();
  }
      initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 48.856614, lng: 2.3522219000000177},
          zoom: 13
        });

        infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            var marker = new google.maps.Marker({
              position: pos,
              map: map,
              title: 'Hello World!'
            });

            infoWindow.setPosition(pos);
            infoWindow.setContent('Vous étes ici.');
            infoWindow.open(map);
            map.setCenter(pos);
          });
        }
    }
}
