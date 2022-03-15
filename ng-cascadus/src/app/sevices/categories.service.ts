import { environment } from './../../environments/environment';
import { Category } from "../models/category";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CategoriesService {

    private URL:String;
    private token: string;

    constructor(private http: HttpClient) {
        this.URL = environment.domain + "admin/categories";
        this.token = localStorage.getItem("jwt");
    }
    
    getAllCategories() : Observable<Category[]>{
        let response = this.http.get<Category[]>(this.URL + "/all", {  headers: new HttpHeaders({
            "Authorization": "Bearer " + this.token,
            "Content-Type": "application/json" 
        }) });
        return response;
    }

    getActiveCategories() : Observable<Category[]>{
        return this.http.get<Category[]>(this.URL + "/active", {  headers: new HttpHeaders({
            "Authorization": "Bearer " + this.token,
            "Content-Type": "application/json" 
        }) });
    }

    getCategoryById(id: Number) : Observable<Category>{
        return this.http.get<Category>(this.URL + "/get/" + id, {  headers: new HttpHeaders({
            "Authorization": "Bearer " + this.token,
            "Content-Type": "application/json" 
        }) });
    }

    addCategory(category: Category) : Observable<Number>{

        const data: Category = {
            Id: 0,
            Naziv: category.Naziv,
            Izbrisano: false
        };
        return this.http.post<Number>(this.URL + "/add", data, {  headers: new HttpHeaders({
            "Authorization": "Bearer " + this.token,
            "Content-Type": "application/json" 
        })} );
    }

    editCategory(category: Category) : Observable<Category> {

        const data: Category = {
            Id: category.Id,
            Naziv: category.Naziv,
            Izbrisano: category.Izbrisano
        }
        return this.http.post<Category>(this.URL + "/update/" + category.Id,  data, {  headers: new HttpHeaders({
            "Authorization": "Bearer " + this.token,
            "Content-Type": "application/json" 
        }) });
    }

    deleteCategory(id: Number) : Observable<Number> {
        return this.http.get<Number>(this.URL + "/delete/" + id, {  headers: new HttpHeaders({
            "Authorization": "Bearer " + this.token,
            "Content-Type": "application/json" 
        }) });
    }
}