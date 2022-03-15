import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Product } from "../models/product";

@Injectable()
export class ProductsService {

    private URL: String;
    private token: string;

    constructor(private http: HttpClient) {
        this.URL = environment.domain + "admin/products";
        var t = localStorage.getItem("jwt");
        if (t != null) {
            this.token = t;
        }
        else this.token = ""
    }

    getAll(): Observable<Product[]> {
        return this.http.get<Product[]>(this.URL + "/all", {  headers: new HttpHeaders({
            "Authorization": "Bearer " + this.token,
            "Content-Type": "application/json"
        }) });
    }

    getActive(): Observable<Product[]> {
        return this.http.get<Product[]>(this.URL + "/active", {  headers: new HttpHeaders({
            "Authorization": "Bearer " + this.token,
            "Content-Type": "application/json"
        }) });
    }

    getById(id: Number): Observable<Product> {
        return this.http.get<Product>(this.URL + "/get/" + id, {  headers: new HttpHeaders({
            "Authorization": "Bearer " + this.token,
            "Content-Type": "application/json",
        }) });
    }

    getByName(name: String): Observable<Product> {
        return this.http.get<Product>(this.URL + "/get/" + name, {  headers: new HttpHeaders({
            "Authorization": "Bearer " + this.token,
            "Content-Type": "application/json",
        }) });
    }

    add(pro: Product): Observable<Number> {

        const data: Product = {
            id: pro.id,
            naziv: pro.naziv,
            kategorijaId: pro.kategorijaId,
            kolicina: pro.kolicina,
            cijena: pro.cijena,
            karakteristike: pro.karakteristike,
            opis: pro.opis,
            putanja: pro.putanja,
            izbrisano: pro.izbrisano,
            thumbnail: pro.thumbnail,
            kategorija: ""
        };
        return this.http.post<Number>(this.URL + "/add", data, {
            headers: new HttpHeaders({
                "Authorization": "Bearer " + this.token,
                "Content-Type": "application/json"
            })
        });
    }

    edit(pro: Product): Observable<Product> {
        const data: Product = {
            id: pro.id,
            naziv: pro.naziv,
            kategorijaId: pro.kategorijaId,
            kolicina: pro.kolicina,
            cijena: pro.cijena,
            karakteristike: pro.karakteristike,
            opis: pro.opis,
            putanja: pro.putanja,
            izbrisano: pro.izbrisano,
            thumbnail: pro.thumbnail,
            kategorija: ""
        }
        return this.http.post<Product>(this.URL + "/update/" + pro.id, data, {  headers: new HttpHeaders({
            "Authorization": "Bearer " + this.token,
            "Content-Type": "application/json"
        }) });
    }

    delete(id: Number): Observable<Number> {
        return this.http.get<Number>(this.URL + "/delete/" + id, {  headers: new HttpHeaders({
            "Authorization": "Bearer " + this.token,
            "Content-Type": "application/json" 
        }) });
    }
}