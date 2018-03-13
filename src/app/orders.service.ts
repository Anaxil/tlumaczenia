import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import config from './config/config';
import { Summary } from './components/orders-list/summary';
import { Order } from './components/orders-list/order';

@Injectable()
export class OrdersService {

  constructor(private http: HttpClient) {
   }

  getOrders() {
    return this.http.get<Order[]>(config.orders);
  }

  getOrder(id) {
    return this.http.get<Order>(config.orders + `/${id}`);
  }

  getSummary() {
    return this.http.get<Summary[]>(config.summary);
  }
}
