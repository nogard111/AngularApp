import { Injectable, Output, EventEmitter } from '@angular/core';
import { IUser } from './User-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  @Output() AuthenticationEvent: EventEmitter<IUser> = new EventEmitter<IUser>();
  logedUser: IUser = null;
  logedUserStorageKey = 'LogedUser';

  constructor() {
    const name = localStorage.getItem(this.logedUserStorageKey);
    if (name != null) {
      this.logedUser = { FirstName: name, id: 'sdfd', LastName: 'Smith' };
    }
  }
  logIn(name: string, pass: string): boolean {
    console.log('Log in successfully');
    this.logedUser = { FirstName: name, id: 'sdfd', LastName: 'Smith' };
    localStorage.setItem(this.logedUserStorageKey, name);
    this.AuthenticationEvent.emit();
    return true;
  }
  logOut(): boolean {
    this.logedUser = null;
    console.log('Log out successfully');
    localStorage.removeItem(this.logedUserStorageKey);
    this.AuthenticationEvent.emit();
    return true;
  }
  IsAuthenticated(): boolean {
    return this.logedUser != null;
  }
  getUserInfo(): IUser {
    return this.logedUser;
  }
}
