import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepted!', req);

    // const copiedReq = req.clone({headers: req.headers.append('', '')});
    // with append we're adding new headers, if we used set instead we'd override the existing headers with the ones here

    const copiedReq = req.clone({params: req.params.append('auth', this.authService.getToken())});
    // gives us an exact copy of the coming request and we can now edit this copy to safely edit it and make sure we don't accidentaly change the incoming request multiple times; in the clone function we can configure the request differently

    return next.handle(copiedReq);
    // this lets the request continue its journey
    // return null;
    // returning null breaks the code
  }
}