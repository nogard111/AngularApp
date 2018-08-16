import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { IUser } from './User-interface';
import { API_URL } from '../constants';
import { Store } from '../../../node_modules/@ngrx/store';
import { UserStore } from './user-store';
import { LogOutAction, LogInAction } from '../core/actions/authorizationAction';

const BASE_URL = API_URL + 'auth';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  logedUser: BehaviorSubject<IUser> = new BehaviorSubject<IUser>(null);
  logedUserStorageKey = 'LogedUser';
  token: any = null;

  constructor(private http: HttpClient, public store: Store<UserStore>) {
    const data = localStorage.getItem(this.logedUserStorageKey);

    if (data != null) {
      const obj = JSON.parse(data);
      this.logedUser.next(obj.user);
      this.token = obj.token;
      this.store.dispatch(new LogInAction(obj.user));
    }
  }

  logIn(name: string, pass: string): Observable<boolean> {

    const login: Subject<boolean> = new Subject<boolean>();

    this.http.post<any>(`${BASE_URL}/login`, JSON.stringify({ login: name, password: pass })).subscribe
      (
      (resp) => {
        console.log('Log in successfully');
        // console.log(resp);
        this.token = resp.token;

        this.http.post<any>(`${BASE_URL}/userinfo`, '').subscribe
          (
          (userinfo) => {
            const user = {
              FirstName: userinfo.name.first,
              id: userinfo.id,
              LastName: userinfo.name.last
            };
            this.store.dispatch(new LogInAction(user));
            localStorage.setItem(this.logedUserStorageKey,
              JSON.stringify({ user: user, token: this.token }));

            login.next(true);
            login.complete();
            return true;
          },
          (error) => {
            console.log('get user error' + error);
            login.error(error.error);
          }
          );
      },
      (error) => {
        console.log('Log in error' + error);
        login.error(error.error);
      }
      );

    return login;
  }

  logOut(): boolean {
    this.store.dispatch(new LogOutAction());

    this.token = null;
    console.log('Log out successfully');
    localStorage.removeItem(this.logedUserStorageKey);
    return true;
  }
  IsAuthenticated(): boolean {
    return this.token != null;
  }
  getUserInfo(): Observable<IUser> {
    return this.logedUser;
  }
}
