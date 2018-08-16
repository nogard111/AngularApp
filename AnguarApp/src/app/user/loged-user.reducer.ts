import { ActionReducer, Action } from '@ngrx/store';
import { IUser } from './User-interface';
import { AuthorizationActionTypes, AuthorizationAction } from '../core/actions/authorizationAction';

export function logedUserReducer(user: IUser, action: AuthorizationAction): IUser {
    switch  (action.type) {
        case AuthorizationActionTypes.LogIn:
            return action.payload;
        case AuthorizationActionTypes.LogOut:
            return null;
            default:
        return user;
    }
}
