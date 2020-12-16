import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../modele/produit';
import {Contact} from '../modele/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  url = 'http://localhost:3000/reactiveform/';
  constructor(private http: HttpClient) { }
  postContact(c: Contact){
    return this.http.post(this.url, c);
  }
}
