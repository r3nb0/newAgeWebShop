import { Login } from './../models/login';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class AuthService {
    private URL:String;

    constructor(private http: HttpClient) {
        this.URL = environment.domain + "auth";
    }
    
    login(user: Login) : Observable<String>{
        return this.http.post<String>(this.URL + "/login", user, {  headers: new HttpHeaders({
            "Content-Type": "application/json"
        })});
    }
    register(user: Login): Observable<Boolean> {
        return this.http.post<Boolean>(this.URL + "/register", user, {  headers: new HttpHeaders({
            "Content-Type": "application/json"
        }) });
    }
}