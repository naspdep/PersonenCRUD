import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private apiURL = 'https://jsonplaceholder.typicode.com'; // TODO: replace with mock-api

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.apiURL + '/users');
  }

  create(person): Observable<Person>{
    return this.httpClient.post<Person>(this.apiURL + '/users', JSON.stringify(person), this.httpOptions);
  }

  find(id): Observable<Person>{
    return this.httpClient.get<Person>(this.apiURL + '/users/' + id);
  }

  update(id, person): Observable<Person> {
    return this.httpClient.put<Person>(this.apiURL + '/users/' + id, JSON.stringify(person), this.httpOptions);
  }

  delete(id): Observable<Person> {
    return this.httpClient.delete<Person>(this.apiURL + '/users/' + id, this.httpOptions);
  }

  errorHandler(error): Observable<never> {
    let  errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    }

    return throwError(errorMessage);
  }
}
