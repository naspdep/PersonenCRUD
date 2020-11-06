import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private apiURL = '../../assets/data/';
  private addition = 'people.json';

  private people: Person[];

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Person[]> {
    // return this.httpClient.get<Person[]>(this.apiURL + this.addition);
    const obs = this.httpClient.get<Person[]>(this.apiURL + this.addition);
    obs.forEach( (next: Person[]) => {
        this.people = next;
      });
    return obs;
  }

  create(person): Observable<Person>{
    return this.httpClient.post<Person>(this.apiURL + this.addition, JSON.stringify(person), this.httpOptions);
  }

  find(id): Observable<Person>{
    // return this.httpClient.get<Person>(this.apiURL + this.addition + id);
    return new Observable<Person>((observer) => {
      observer.next(this.people[id]);
    });
  }

  update(id, person): Observable<Person> {
    // return this.httpClient.put<Person>(this.apiURL + this.addition + id, JSON.stringify(person), this.httpOptions);

    return new Observable<Person>((observer) => {
      observer.next(this.people[id]);
    });
  }

  delete(id): Observable<Person> {
    // return this.httpClient.delete<Person>(this.apiURL + this.addition + id, this.httpOptions);
    return new Observable<Person>((observer) => {
      observer.next(this.people[id]);
    });
  }

  errorHandler(error): Observable<never> {
    let  errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    }

    return throwError(errorMessage);
  }
}
