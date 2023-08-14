import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import { Actualite } from '../models/actualites';
import { Page } from '../models/page';
@Injectable({
  providedIn: 'root'
})
export class ActualitesService {
  private   API_URL = 'http://localhost:8088/api/actualites/';


  constructor(private http: HttpClient) { }

  findTop3Act(): Observable<any> {
    return this.http.get(this.API_URL+ 'findTop3Act');
}


getActualitesPageSearch(keyword:string ,page: number, size: number): Observable<Page<Actualite>> {
  return this.http.get<Page<Actualite>>(`${this.API_URL}search?keyword=${keyword}&page=${page}&size=${size}`);
}

getActualiteById(id: number): Observable<Actualite> {
  return this.http.get<Actualite>(`${this.API_URL}findActById?id=${id}`);
}

public addEmail(email: string): Observable<any> {
  const body = { email }; // Create an object with the email property
  return this.http.post(`${this.API_URL}addEmail`, body, { responseType: 'json' });

}

}
