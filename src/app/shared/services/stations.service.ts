import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StationsService {
  constructor(private httpClient: HttpClient) { }

  getStations(): Observable<any> {
    return this.httpClient.get<any>(environment.apiUrl + 'stations');
  }

  getReservations(): Observable<any> {
    return this.httpClient.get<any>(environment.apiUrl + 'stations/reservations');
  }

}