import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from './products.list';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'assets/products.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Products> {
    return this.http.get<Products>(this.apiUrl);
  }
}
