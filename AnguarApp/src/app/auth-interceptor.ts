import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { AuthorizationService } from './user/authorization.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authorizationService: AuthorizationService) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        //if (this.authorizationService.IsAuthenticated())
            const authReq = req.clone({
                headers: req.headers.set('Authorization', 'authorize-me')
            });

        return next.handle(authReq);
    }
}
