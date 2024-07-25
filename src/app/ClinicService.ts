
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clinic } from './Clinic'; // Import the Clinic model/interface if defined

@Injectable({
  providedIn: 'root'
})
export class ClinicService {
  private baseUrl = 'http://localhost:8080'; // Adjust URL as per your backend configuration

  constructor(private http: HttpClient) { }

  registerClinic(clinic: Clinic): Observable<any> {
    return this.http.post(`${this.baseUrl}/clinics/register`, clinic);
  }
}
