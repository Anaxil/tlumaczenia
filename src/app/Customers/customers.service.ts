import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Customer } from './customer';
import config from '../config/config.json'

@Injectable()
export class CustomersService {

  client: Customer;

  constructor(private http: HttpClient) { }

  getCustomers() {
    return this.http.get(config.customers);
  }

  getCustomer(id) {
    console.log(config.customers + `/${id}`);
    return this.http.get(config.customers + `/${id}`);
  }
}
