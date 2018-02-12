import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../orders.service';
import { Order } from './order';
import { Summary } from './summary';
import { CustomersService } from '../../Customers/customers.service';
import { Customer } from '../../Customers/customer';
import 'rxjs/add/operator/mergeMap';
import { isObject } from 'util';

@Component({
  selector: 'orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {

  orders: Order[];
  selected: Order;
  selectedIndex: number;
  /*
  columns = [
    { prop: 'id', name: 'Id' },
    { prop: 'customerName', name: 'Klient' },
    { prop: 'status', name: 'Status', cellTemplate: 'qwe' },
    { prop: 'startDate', name: 'Data zlecenia' },
    { prop: 'endDate', name: 'Data zakończenia' },
    { prop: 'interpreterPrice', name: 'Cena tłumacza' },
    { prop: 'clientPrice', name: 'Cena dla klienta' },
    { prop: 'characters', name: 'Ilość znaków' }
  ];

  tableMessages = {
    emptyMessage: 'Pobieranie danych',
    totalMessage: 'Razem'
  }
*/
  constructor(private ordersService: OrdersService,
              private customersService: CustomersService) {
  }

  ngOnInit() {
    this.ordersService.getOrders()
      .subscribe((orders: Order[]) => {
        this.orders = orders;
    });
    
  }

  isObject(val) {
    if (val === null) { return false;}
    return ( (typeof val === 'function') || (typeof val === 'object') );     
  }

  copyObj(object) {
    return JSON.parse(JSON.stringify(object));
  }

  // getCustomerNames(data: Order[]) {
  //   data.forEach((order: Order) => {
  //     this.customersService.getCustomer(order.id)
  //       .subscribe((customer: Customer) => {
  //         // console.log(order.id);
  //         // console.log(customer.firstName + customer.lastName);
  //         // console.log('tu?:' , this.orders);
  //         console.log(data);
          
  //         this.orders[order.id-1]['customerName'] =  customer.firstName + ' ' + customer.lastName});
  //       });
         
  // }

  select(order: Order) {
    if (!this.selected || ((this.selected.id !== order.id))) {
      this.selected = JSON.parse(JSON.stringify(order));
      this.selectedIndex = this.orders.indexOf(order);    
    }
    // if (!this.selected) {
    //   // this.selected = JSON.parse(JSON.stringify(order));
    //   this.selected = JSON.parse(JSON.stringify(order));
    // }
    // else if (this.selected.id !== order.id) {
    //   this.selected = JSON.parse(JSON.stringify(order));
    // }
    // this.selectedIndex = this.orders.indexOf(order);    
  }

  close() {
    this.selected = null;
  }

  save() {
    this.orders[this.selectedIndex] = JSON.parse(JSON.stringify(this.selected));
    delete this.selected;
    delete this.selectedIndex;
  }

  delete(order: Order) {
    this.orders.splice(this.orders.indexOf(order),1);
  }

}
