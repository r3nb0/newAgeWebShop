import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Invoice } from "../models/invoice";

@Injectable()
export class InvoicesService {
    
    private URL:String;
    private token: string;

    constructor(private http: HttpClient) {
        this.URL = environment.domain + "admin/invoices";
        this.token = localStorage.getItem("jwt");
    }
    
    getAll() : Observable<Invoice[]>{
        return this.http
        .get<Invoice[]>(this.URL + "/all", {  headers: new HttpHeaders({
            "Authorization": "Bearer " + this.token,
            "Content-Type": "application/json" 
        }) });
    }

    getActive() : Observable<Invoice[]>{
        return this.http.get<Invoice[]>(this.URL + "/active", {  headers: new HttpHeaders({
            "Authorization": "Bearer " + this.token,
            "Content-Type": "application/json" 
        }) }); 
    }

    getById(id: Number) : Observable<Invoice>{
        return this.http.get<Invoice>(this.URL + "/get/" + id, {  headers: new HttpHeaders({
            "Authorization": "Bearer " + this.token,
            "Content-Type": "application/json" 
        }) });
    }

    add(inv: Invoice) : Observable<Number>{
        const data: Invoice = {
            brojRacuna: 0,
            id: 0,
            datumIzdavanja: inv.datumIzdavanja,
            datumSlanja: null,
            guid: "",
            izbrisano: false,
            komentarNarudzbe: inv.komentarNarudzbe,
            pracenjePosiljke: "",
            stavke: inv.stavke,
            kupacId: inv.kupacId,
            kupac: inv.kupac
        };
        return this.http.post<Number>(this.URL + "/add", data, {  headers: new HttpHeaders({
            "Authorization": "Bearer " + this.token,
            "Content-Type": "application/json" 
        })} ); 
    }

    edit(inv: Invoice) : Observable<Invoice> {
        const data: Invoice = {
            brojRacuna: 0,
            id: 0,
            datumIzdavanja: inv.datumIzdavanja,
            datumSlanja: null,
            guid: "",
            izbrisano: false,
            komentarNarudzbe: inv.komentarNarudzbe,
            pracenjePosiljke: "",
            stavke: inv.stavke,
            kupacId: inv.kupacId,
            kupac: inv.kupac
        };
        return this.http.post<Invoice>(this.URL + "/update/" + inv.id,  data, {  headers: new HttpHeaders({
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

    getNextInvoiceNumber() : Observable<Number> {
        return this.http.get<Number>(this.URL + "/next", {  headers: new HttpHeaders({
            "Authorization": "Bearer " + this.token,
            "Content-Type": "application/json" 
        }) });
    }
}