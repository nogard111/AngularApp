import { Action } from '@ngrx/store';
import { IUser } from '../../user/User-interface';

export const AuthorizationActionTypes = {
    LogIn: '[authorization] Log In',
    LogOut: '[authorization] Log Out',
};

export interface AuthorizationAction extends Action {
    payload?: IUser;
}

export class LogInAction implements Action {
    type = AuthorizationActionTypes.LogIn;
    constructor(public payload: IUser) {
    }
}

export class LogOutAction implements Action {
    type = AuthorizationActionTypes.LogOut;
    constructor() {
    }
}

export type Actions =
    LogInAction | LogOutAction;

