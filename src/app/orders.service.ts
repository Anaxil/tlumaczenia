import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import config from './config/config';
import { Summary } from './components/orders-list/summary';
import { Order } from './components/orders-list/order';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { startWith } from 'rxjs/operators/startWith';


@Injectable()
export class OrdersService {

  private _orders$: Subject<Order[]>;

  constructor(private http: HttpClient) {
    this._orders$ = new Subject();
    //czy to dorbe miejsce na inicjowanie pobieranie wszystkich zlecen?
    // a jak ktos po prostu doda zlecenie, wtedy nie pobiera calej listy
    //a tworzy sie usluga
    this.getOrders();
   }

  getOrders() {
    // return this.http.get<Order[]>(config.orders);
    this.http.get<Order[]>(config.orders)
      .subscribe((orders: Order[]) => {
        this._orders$.next(orders);
      });
  }

  getOrdersStream() {
    // return this._orders$.asObservable();
    return from(this._orders$)
      .pipe(
        //TODO startWith
        // startWith(this.orders);
      )
  }

  getOrder(id) {
    return this.http.get<Order>(config.orders + `/${id}`);
  }

  getSummary() {
    return this.http.get<Summary[]>(config.summary);
  }
}
