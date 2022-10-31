import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Profession } from '../models/profession';

@Injectable({
  providedIn: 'root',
})
export class ProfessionService {
  url = 'http://localhost:5000/profession';
  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getProfession(): Observable<Profession[]> {
    return this.httpClient
      .get<Profession[]>(this.url)
      .pipe(retry(2), catchError(this.handleError));
  }

  getProfessionById(id: number): Observable<Profession> {
    return this.httpClient
      .get<Profession>(this.url + '/' + id)
      .pipe(retry(2), catchError(this.handleError));
  }

  saveProfession(profession: Profession): Observable<Profession> {
    return this.httpClient
      .post<Profession>(this.url, JSON.stringify(profession), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  updateProfession(profession: Profession): Observable<Profession> {
    return this.httpClient
      .put<Profession>(
        this.url + '/' + profession.id,
        JSON.stringify(profession),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteProfession(profession: Profession) {
    return this.httpClient
      .delete<Profession>(this.url + '/' + profession.id, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage =
        `Error code: ${error.status}, ` + `message: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
