import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Sloe } from '../models/sloe.model';


@Injectable({
  providedIn: 'root'
})
export class SloeService {
  private readonly backendSlo = '/weatherforecast';

  private readonly originUrl: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {
    this.originUrl = window.location.origin;
  }
  
  get(status: any): Observable<Sloe> {
    return this.http.get(`${this.originUrl + this.backendSlo}/test${status}`);
  }

  update(data: any): Observable<any> {
    return this.http.get(`${this.originUrl + this.backendSlo}/test${status}`);
  }
  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

}
