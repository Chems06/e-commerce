import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Orders } from './orders.list';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  apiUrl = 'assets/orders.json';

  constructor(private http: HttpClient) {}

  getOrders(): Observable<Orders> {
    return this.http.get<Orders>(this.apiUrl);
  }
}
