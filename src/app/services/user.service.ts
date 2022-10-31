import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { User, UserFromType } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = 'http://localhost:5000/user';
  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getUsers(): Observable<User[]> {
    return this.httpClient
      .get<User[]>(this.url)
      .pipe(retry(2), catchError(this.handleError));
  }

  getUsersById(id: number): Observable<User> {
    return this.httpClient
      .get<User>(this.url + '/' + id)
      .pipe(retry(2), catchError(this.handleError));
  }

  saveUser(user: any): Observable<any> {
    return this.httpClient
      .post<any>(this.url, JSON.stringify(user), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  updateUser(user: any): Observable<any> {
    return this.httpClient
      .put<any>(
        this.url + '/' + user.id,
        JSON.stringify(user),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteUser(user: User) {
    return this.httpClient
      .delete<User>(this.url + '/' + user.id, this.httpOptions)
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
