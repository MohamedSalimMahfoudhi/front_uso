import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  constructor(private http: HttpClient) { }
  getLocalisation(): Promise<any> {
    navigator.permissions && navigator.permissions.query({ name: 'geolocation' }).then(function (PermissionStatus) {

    })
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
        resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude })
      })
    })
  }
}
