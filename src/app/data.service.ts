import { Injectable } from '@angular/core';

import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { IUser } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //Create BehaviorSubject observable to get input message from home page
  private message = new BehaviorSubject('');
  sharedUserMessage = this.message.asObservable();

  constructor(private http: HttpClient) { }

  //Set user message which is entered in home page
  setInputText(userMessage: string) {
    this.message.next(userMessage);
  }

  //Mock user details json data
  private userUrl = 'api/users/users.json';

  //Get user details
  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.userUrl).pipe(
      tap(data => data.join()),
      catchError(this.handleError)
    );
  }

  //User details api error handle
  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}
