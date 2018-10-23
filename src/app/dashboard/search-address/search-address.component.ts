import { Component, ElementRef, ViewChild, NgZone, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-address',
  templateUrl: './search-address.component.html',
  styleUrls: ['./search-address.component.css']
})
export class SearchAddressComponent implements OnInit {
  lat: number;
  lng: number;
  zoom: number = 17;
  country: string;
  address: string;
  state: string;
  city: string;
  postal_code: string;
  fullAddress: string;
  currentLocation: string;
  isSearchFound: boolean = false;
  @ViewChild('addressSearch')
  public searchElementRef: ElementRef;
  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private router: Router
  ) { }

  ngOnInit() {
    //load Places Autocomplete
    sessionStorage.removeItem('googlePlace');
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          sessionStorage.setItem('googlePlace', JSON.stringify(place));
          if (place.geometry){
            this.router.navigate(['/view-address']);
            this.isSearchFound = false;
            console.log(place.geometry);
            
          }
          
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            // If response is null
            // window.alert("Autocomplete's returned place contains no geometry");
            console.log(place.geometry);
            this.isSearchFound = true;
            return;
          }
        });
      });
    });
  }
  value: string = '';
  onEnterLocation(value: string) {
    console.log(value);
  }
  onEnterClick(value: string) {
    console.log(value);
  }

  public setCurrentPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;

          let geocoder = new google.maps.Geocoder();
          let latlng = new google.maps.LatLng(this.lat, this.lng);
          let request = {
            latLng: latlng
          };

          geocoder.geocode({ 'location': latlng }, (place, status) => {
            if (status == google.maps.GeocoderStatus.OK) {
              if (place[0] != null) {
                this.ngZone.run(() => {
                  sessionStorage.setItem('googlePlace', JSON.stringify(place[0]));
                  if (place[0].geometry)
                    this.router.navigate(['/view-address']);
                })
              } else {
                alert("No address available");
              }
            }
          });
        },
        error => {
          console.log("Error code: " + error.code + "<br /> Error message: " + error.message);
        }
      );
    }
  }

}






