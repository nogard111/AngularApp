import { Injectable, Output, EventEmitter } from '@angular/core';
import { IUser } from './User-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  @Output() AuthenticationEvent: EventEmitter<IUser> = new EventEmitter<IUser>();
  logedUser: IUser = null;

  constructor() { }
  logIn(name: string, pass: string) {
    console.log('Log in successfully');
    this.logedUser = { FirstName: name, Id: 'sdfd', LastName: 'Smith' };
    this.AuthenticationEvent.emit();
  }
  logOut() {
    this.logedUser = null;
    console.log('Log out successfully');
    this.AuthenticationEvent.emit();
  }
  IsAuthenticated(): boolean {
    return this.logedUser != null;
  }
  getUserInfo(): IUser {
    return this.logedUser;
  }
}
