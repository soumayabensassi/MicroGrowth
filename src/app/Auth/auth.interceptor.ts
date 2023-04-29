import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";
import { UserService } from "../service/user.service";
import { Router } from "@angular/router";
import {Injectable}from "@angular/core";
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private user: UserService, private router: Router) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.headers.get('No-Auth') === 'true') {
            return next.handle(req.clone())
        }
        const token = this.user.getToken();
        this.addToken(req, token);
        return next.handle(req).pipe(
            catchError(
                (err: HttpErrorResponse) => {
                    console.log(err.status);
                    if (err.status === 401) {
                        this.router.navigate(['/user/login'])
                    } 
                    if (err.status === 403) {
                        return throwError(err.error)
                    } 
                     return throwError(err.error)
                }
            )
        )
    }
    private addToken(request: HttpRequest<any>, token: string) {
        return request.clone(
            {
                setHeaders: {
                    Authorization: `Bearer ${token}`

                }
            }
        )
    }
}