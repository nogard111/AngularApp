import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from '../user/authorization.service';

@Injectable()
export class CanActivateGuard implements CanActivate {
    constructor(private auth: AuthorizationService, private router: Router) {
    }
    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        if (this.auth.IsAuthenticated()) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}
