import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthorizationService } from '../user/authorization.service';
import { Observable, of } from 'rxjs';

@Injectable()
export class CanActivateAuthenticateGuard implements CanActivate {
    constructor(private auth: AuthorizationService, private router: Router) {
    }
    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        if (this.auth.IsAuthenticated()) {
            return of(true);
        }

        this.router.navigate(['/login']);
        return of(false);
    }
}
