import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-view-address',
  templateUrl: './view-address.component.html',
  styleUrls: ['./view-address.component.css']
})
export class ViewAddressComponent implements OnInit {
  lat: number = 22.6847478;
  lng: number = 88.46320449999996;
  zoom: number = 17;
  country: string;
  address: string;
  state: string;
  city: string;
  postal_code: string;
  fullAddress: string; 
  constructor() { }

  ngOnInit() {
    this.getGooglePlace();
  }

  getGooglePlace() {
    let place = JSON.parse(sessionStorage.getItem('googlePlace'));
    if (place.geometry) {
      this.lat = place.geometry.location.lat;
      this.lng = place.geometry.location.lng;
    }
    console.log(place);

   
    if (place.address_components) {
      this.address = [
        (place.address_components[0] && place.address_components[0].short_name || ''),
        (place.address_components[1] && place.address_components[1].short_name || ''),
        (place.address_components[2] && place.address_components[2].short_name || '')
      ].join(' ');
    }

    console.log(this.address);

    //Location details
    this.fullAddress = place.formatted_address;
    console.log(place.formatted_address);
    for (var i = 0; i < place.address_components.length; i++) {
      if (place.address_components[i].types[0] == 'postal_code') {
        this.postal_code = place.address_components[i].long_name;
      }
      if (place.address_components[i].types[0] == 'locality') {
        this.city = place.address_components[i].long_name;
      }
      if (place.address_components[i].types[0] == 'administrative_area_level_1') {
        this.state = place.address_components[i].long_name;
      }
      if (place.address_components[i].types[0] == 'country') {
        this.country = place.address_components[i].long_name;
      }
    }

  }

}
