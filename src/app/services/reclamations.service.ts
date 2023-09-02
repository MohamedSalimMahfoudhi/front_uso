import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from "@angular/common/http";
import { Reclamation } from '../models/reclamation';

@Injectable({
  providedIn: 'root'
})
export class ReclamationsService {
  private   API_URL = 'http://localhost:8088/api/reclamation/';

  constructor(private http: HttpClient) { }


  public addReclamation(reclamation: Reclamation){
    return this.http.post(`${this.API_URL}ajouterReclamation`,reclamation);
  }
}
