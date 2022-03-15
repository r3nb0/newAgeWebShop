import { Buyer } from './../models/buyer';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class BuyersService {

    private URL:String;
    private token: string;

    constructor(private http: HttpClient) {
        this.URL = environment.domain + "admin/buyers";
        this.token = localStorage.getItem("jwt");
    }
    
    getAllBuyers() : Observable<Buyer[]>{
        return this.http.get<Buyer[]>(this.URL + "/all", {  headers: new HttpHeaders({
            "Authorization": "Bearer " + this.token,
            "Content-Type": "application/json" 
        }) });
    }

    getActiveBuyers() : Observable<Buyer[]>{
        return this.http.get<Buyer[]>(this.URL + "/active", {  headers: new HttpHeaders({
            "Authorization": "Bearer " + this.token,
            "Content-Type": "application/json" 
        }) });
    }

    getBuyerById(id: Number) : Observable<Buyer>{
        return this.http.get<Buyer>(this.URL + "/get/" + id, {  headers: new HttpHeaders({
            "Authorization": "Bearer " + this.token,
            "Content-Type": "application/json" 
        }) });
    }

    addBuyer(buyer: Buyer) : Observable<Number>{
        const data: Buyer = {
            id: buyer.id,
            ime: buyer.ime,
            prezime: buyer.prezime,
            grad: buyer.grad,
            postanskiBroj: buyer.postanskiBroj,
            kontakt: buyer.kontakt,
            kucniBroj: buyer.kucniBroj,
            email: buyer.email,
            ulica: buyer.ulica,
            izbrisano: buyer.izbrisano 
        };
        return this.http.post<Number>(this.URL + "/add", data, {  headers: new HttpHeaders({
            "Authorization": "Bearer " + this.token,
            "Content-Type": "application/json" 
        })} );
    }

    editBuyer(buyer: Buyer) : Observable<Buyer> {

        const data: Buyer = {
            id: buyer.id,
            ime: buyer.ime,
            prezime: buyer.prezime,
            grad: buyer.grad,
            postanskiBroj: buyer.postanskiBroj,
            kontakt: buyer.kontakt,
            kucniBroj: buyer.kucniBroj,
            email: buyer.email,
            ulica: buyer.ulica,
            izbrisano: buyer.izbrisano 
        }
        return this.http.post<Buyer>(this.URL + "/update/" + buyer.id,  data, {  headers: new HttpHeaders({
            "Authorization": "Bearer " + this.token,
            "Content-Type": "application/json" 
        }) });
    }

    deleteBuyer(id: Number) : Observable<Number> {
        return this.http.get<Number>(this.URL + "/delete/" + id, {  headers: new HttpHeaders({
            "Authorization": "Bearer " + this.token,
            "Content-Type": "application/json" 
        }) });
    }
}