import { Injectable } from '@angular/core';
import {Product} from '../modele/produit';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
url = 'http://localhost:3000/product/';
  constructor(private http: HttpClient) { }
  //share data
  getevent(){
    return this.http.get<Product[]>(this.url);
  }
  postEvent(event: Product){
    return this.http.post(this.url, event);
  }
  updateEvent(id, event: Product) {
    return this.http.put(this.url + id, event);
  }
  deleteEvent(id) {
    return this.http.delete(this.url + id);
  }

}

