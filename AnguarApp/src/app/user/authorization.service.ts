import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from './User-interface';
import { API_URL } from '../constants';

const BASE_URL = API_URL + 'auth';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  @Output() AuthenticationEvent: EventEmitter<IUser> = new EventEmitter<IUser>();
  logedUser: IUser = null;
  logedUserStorageKey = 'LogedUser';
  token: any = null;

  constructor(private http: HttpClient) {
    const data = localStorage.getItem(this.logedUserStorageKey);

    if (data != null) {
      const obj = JSON.parse(data);
      this.logedUser = obj.user;
      this.token = obj.token;
    }
  }

  logIn(name: string, pass: string) {// : Observable<boolean> {

    this.http.post<any>(`${BASE_URL}/login`, JSON.stringify({ login: name, password: pass })).subscribe
      (
      (resp) => {
        console.log('Log in successfully');
        // console.log(resp);
        this.token = resp.token;

        this.http.post<any>(`${BASE_URL}/userinfo`, '').subscribe
          (
          (userinfo) => {
            this.logedUser = {
              FirstName: userinfo.name.first,
              id: userinfo.id,
              LastName: userinfo.name.last
            };
            localStorage.setItem(this.logedUserStorageKey,
              JSON.stringify({ user: this.logedUser, token: this.token }));

            this.AuthenticationEvent.emit();
            return true;
          },
          (error) => {
            console.log('get user error' + error);
          }
          );
      },
      (error) => {
        console.log('Log in error' + error);
      }
      );

  }

  logOut(): boolean {
    this.logedUser = null;
    this.token = null;
    console.log('Log out successfully');
    localStorage.removeItem(this.logedUserStorageKey);
    this.AuthenticationEvent.emit();
    return true;
  }
  IsAuthenticated(): boolean {
    return this.token != null;
  }
  getUserInfo(): IUser {
    return this.logedUser;
  }
}
