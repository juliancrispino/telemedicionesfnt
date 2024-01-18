import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArduinoService {
  private apiUrl = 'https://young-grizzly-degree.glitch.me/api/arduino-data';

  constructor(private http: HttpClient) {}

  getDataFromArduino(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
