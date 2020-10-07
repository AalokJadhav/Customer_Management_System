import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { } from 'googlemaps';
import {MouseEvent} from "@agm/core";




@Component({
  selector: 'app-uploadmap',
  templateUrl: './uploadmap.component.html',
  styleUrls: ['./uploadmap.component.css']
})
export class UploadmapComponent implements OnInit {

  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;

  // @ViewChild('places')
  @ViewChild('search', { static: false, }) searchElementRef: ElementRef;

  geoCoder: any;
  address: any;


  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) { }

  ngOnInit() {


    //set google maps defaults
    this.zoom = 4;
    // this.latitude = 39.8282;
    // this.longitude = -98.5795;

    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();

    







    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;

      let autocomplete = new window['google'].maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          console.log(place);
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          console.log('Latitude: ', this.latitude);
          console.log('Longitude: ', this.longitude);
          this.zoom = 12;
        });
      });
    });



    // this.mapsAPILoader.load().then(
    //   () => {
    //    let autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement,);

    //     autocomplete.addListener("place_changed", () => {
    //     this.ngZone.run(() => {
    //      let place: google.maps.places.PlaceResult = autocomplete.getPlace();
    //     this. updateSchedule(place)
    //      if(place.geometry === undefined || place.geometry === null ){
    //       return;
    //      }
    //      this.lat = place.geometry.location.lat();
    //       this.lng = place.geometry.location.lng();
    //       console.log(this.lat);
    //       console.log(this.lng);
    //       this.zoom = 12
    //     });
    //     });
    //   }
    //      );
  }
  // lng(lng: any) {
  //   throw new Error("Method not implemented.");
  // }
  // lat(lat: any) {
  //   throw new Error("Method not implemented.");
  // }

  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
        this.getAddress(this.latitude, this.longitude);
      });
    }
  }


  markerDragEnd($event: MouseEvent) {
    console.log($event);
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    this.getAddress(this.latitude, this.longitude);
  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }
  }


