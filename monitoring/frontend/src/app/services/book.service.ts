import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private readonly backendUrl = '/api/books';
  //private readonly originUrl = 'http://localhost:8080';
  private readonly originUrl: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {
    this.originUrl = window.location.origin;
  }

  getAll(): Observable<Book[]> {
    return this.http
      .get<Book[]>(this.originUrl + this.backendUrl)
      .pipe(catchError(this.errorHandler));
  }

  get(id: any): Observable<Book> {
    return this.http.get(`${this.originUrl + this.backendUrl}/${id}`);
  }


  create(data: any): Observable<Book> {
    return this.http.post(this.originUrl + this.backendUrl,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.originUrl + this.backendUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.originUrl + this.backendUrl}/${id}`);
  }

  findByBookName(BookName: any): Observable<Book[]> {
    return this.http.get<Book[]>(
      `${this.originUrl + this.backendUrl}?BookName=${BookName}`
    );
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
