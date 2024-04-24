import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../models/country.model';

const baseUrl = 'http://worldinformationapienv.eba-zcmupdkn.us-east-1.elasticbeanstalk.com/country-info'


@Injectable({
  providedIn: 'root',
})
export class OtherService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Country[]> {
    return this.http.get<Country[]>(baseUrl);
  }

  get(): Observable<Country> {
    return this.http.get<Country>(`${baseUrl}?country=canada`);
  }

  
  findByCountry(title: any): Observable<Country[]> {
    return this.http.get<Country[]>(`${baseUrl}?country=${title}`);
  }
}
