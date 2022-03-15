import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { DiscountCode } from "../models/discountCode";

@Injectable()
export class DiscountsService {
    
    private URL:String;    
    private token: string;

    constructor(private http: HttpClient) {
        this.URL = environment.domain + "admin/discounts";
        this.token = localStorage.getItem("jwt");
    }
    
    getAll() : Observable<DiscountCode[]>{
        return this.http
        .get<DiscountCode[]>(this.URL + "/all", {  headers: new HttpHeaders({
            "Authorization": "Bearer " + this.token,
            "Content-Type": "application/json" 
        }) });
    }

    getActive() : Observable<DiscountCode[]>{
        return this.http.get<DiscountCode[]>(this.URL + "/active", {  headers: new HttpHeaders({
            "Authorization": "Bearer " + this.token,
            "Content-Type": "application/json" 
        }) }); 
    }

    getById(id: Number) : Observable<DiscountCode>{
        var headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
        return this.http.get<DiscountCode>(this.URL + "/get/" + id, {  headers: new HttpHeaders({
            "Authorization": "Bearer " + this.token,
            "Content-Type": "application/json" 
        }) });
    }

    checkDiscountCode(code: String) : Observable<DiscountCode>{
        var headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
        return this.http.get<DiscountCode>(this.URL + "/lookup/" + code, {  headers: new HttpHeaders({
            "Authorization": "Bearer " + this.token,
            "Content-Type": "application/json" 
        }) });
    }

    add(code: DiscountCode) : Observable<Number>{
        const data: DiscountCode = {
            id: code.id,
            popustKod: code.popustKod,
            popustUPostocima: code.popustUPostocima,
            vrijediDo: code.vrijediDo,
            izbrisano: code.izbrisano 
        };
        return this.http.post<Number>(this.URL + "/add", data, {  headers: new HttpHeaders({
            "Authorization": "Bearer " + this.token,
            "Content-Type": "application/json" 
        })} ); 
    }

    edit(code: DiscountCode) : Observable<DiscountCode> {
        const data: DiscountCode = {
            id: code.id,
            popustKod: code.popustKod,
            popustUPostocima: code.popustUPostocima,
            vrijediDo: code.vrijediDo,
            izbrisano: code.izbrisano 
        }
        return this.http.post<DiscountCode>(this.URL + "/update/" + code.id,  data, {  headers: new HttpHeaders({
            "Authorization": "Bearer " + this.token,
            "Content-Type": "application/json" 
        }) }); 
    }

    delete(id: Number) : Observable<Number> {
        return this.http.get<Number>(this.URL + "/delete/" + id, {  headers: new HttpHeaders({
            "Authorization": "Bearer " + this.token,
            "Content-Type": "application/json" 
        }) }); 
    }
}