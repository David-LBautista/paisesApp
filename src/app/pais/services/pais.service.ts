import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Country } from '../interfaces/paises.interface';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

private apiurl:string = 'https://restcountries.eu/rest/v2';

  constructor(
    private http:HttpClient
  ) { }

  buscarPais(termino:string):Observable<Country[]>{
    const url = `${this.apiurl}/name/${termino}`;
    return this.http.get<Country[]>(url);
  }

  buscarCapital(termino:string):Observable<Country[]>{
    const url = `${this.apiurl}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }

  getPais(id:string):Observable<Country>{
    const url = `${this.apiurl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  buscarRegion(region:string):Observable<Country[]>{
    const url = `${this.apiurl}/region/${region}`;
    return this.http.get<Country[]>(url);
  }



}
