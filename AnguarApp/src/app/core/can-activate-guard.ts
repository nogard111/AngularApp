import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from '../user/authorization.service';

@Injectable()
export class CanActivateGuard implements CanActivate {
    constructor(private auth: AuthorizationService) {
    }
    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        return this.auth.IsAuthenticated();
    }
}
