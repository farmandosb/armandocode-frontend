import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LocalStorageService } from "ngx-webstorage";
import { Observable } from "rxjs";

@Injectable()
export class HttpClientInterceptor implements HttpInterceptor {
    constructor(private $localStorage: LocalStorageService) {

    }
    intercept(req: HttpRequest<any>,
        next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.$localStorage.retrieve("authenticationToken");
      

        if (token) {
            console.log('inside intercept jwt token: ' + token);
            const cloned = req.clone({
                headers: req.headers.set("Authorization",
                    "Bearer " + token)
            });

            return next.handle(cloned);
        }
        else {
            console.log('inside intercept not token found in LocalStorage, token= '+token);
            return next.handle(req);
        }
    }
}
