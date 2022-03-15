import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {
    /**
     *
     */
    constructor(private router: Router, private jwtHelper: JwtHelperService) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const token = localStorage.getItem("jwt");
        if (token && !this.jwtHelper.isTokenExpired(token)) {
            const role = localStorage.getItem("role");
            if (role == "Admin" && route.url.toString() == "admin") {
                return true;
            } else if (role == "Korisnik" && route.url.toString() == "profile") {
                return true;
            } else {
                this.router.navigate(["home"]);
                return false;
            }
        } else {
            this.router.navigate(["account"]);
            return false;
        }
    }
}