import { Injectable } from '@angular/core';
import { logUser, User } from './user';
import { catchError, map } from 'rxjs/operators';
import { Observable, Subject, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  REST_API: string = 'http://localhost:8000';
  REST_API1: string = 'https://localhost:8080';

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }
  // Add
  AddUser(data: User): Observable<any> {
    let API_URL = `${this.REST_API}/api/register`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }

  //login user
  loginUser(username: any,password: any): Observable<any> {
    let API_URL = `${this.REST_API}/api/login`;
    const headers = new HttpHeaders ({'Content-Type': 'application/json; charset=utf-8'});
    return this.httpClient.post(API_URL,{username,password},{headers:headers,withCredentials: true})
      .pipe(
        catchError(this.handleError)
      )
  }

  //getting images
  GetFiles() {
    let API_URL = `${this.REST_API}/api/files`;
    const headers = new HttpHeaders ({'Content-Type': 'application/json; charset=utf-8'});
    return this.httpClient.get(API_URL,{headers:headers,withCredentials: true})
      .pipe(
        catchError(this.handleError)
      )
  }

  //user logout

  Logout(){
    let API_URL = `${this.REST_API}/api/logout`;
    return this.httpClient.get(API_URL, { withCredentials: true })
  }



  // Delete
  deletefILE(file_id:any): Observable<any> {
    let API_URL = `${this.REST_API}/api/delimg`;
    return this.httpClient.delete(API_URL, { headers: this.httpHeaders,body : {"file_id" : file_id}}).pipe(
        catchError(this.handleError)
      )
  }


  //add files
  addFile(formdata: any):Observable<any>{
    let API_URL=`${this.REST_API}/api/file`;
    return this.httpClient.post(API_URL,formdata)
    .pipe(
      catchError(this.handleError)
    )
  }


  //facebook-login
   fblog() {
    let API_URL = `${this.REST_API1}/api/auth/facebook`;
    const headers = new HttpHeaders ({'Content-Type': 'application/json; charset=utf-8'});
    return this.httpClient.get(API_URL,{headers:headers,withCredentials: true})
      .pipe(
        catchError(this.handleError)
      )
  }


  // Error
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }


  private loggedIn: Subject<boolean> = new Subject<boolean>();

}
