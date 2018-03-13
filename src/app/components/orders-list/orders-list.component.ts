import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../orders.service';
import { Order } from './order';
import { Summary } from './summary';
import { CustomersService } from '../../Customers/customers.service';
import { Customer } from '../../Customers/customer';
import 'rxjs/add/operator/mergeMap';
import { isObject } from 'util';
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';


enum translations {
  Zwykłe,
  Przysięgłe
}

@Component({
  selector: 'orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {

  orders: Order[];
  selected: Order;
  selectedIndex: number;
  translations: translations;
  statusesJSON = {
      0: 'Przyjęte',
      1: 'Skanowanie dokumentów',
      2: 'Wysyłka do wyceny',
      3: 'Oczekiwanie na dezycję klienta',
      4: 'Oczekiwanie na oryginały dokumentów',
      5: 'Faktura proforma',
      6: 'Wysyłka do tłumacza',
      7: 'Kontakt z klientem - przetłumaczone dokumenty',
      8: 'Wystawienie faktury - odbiór dokumentów'
    };
    statuses = [];

    minDate = new Date(2017, 5, 10);
    maxDate = new Date(2018, 9, 15);
   
    bsValue: Date = new Date();
    bsRangeValue: any = [new Date(2017, 7, 4), new Date(2017, 7, 20)];


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
              private customersService: CustomersService,
              private localeService: BsLocaleService) {
  }

  ngOnInit() {
    this.ordersService.getOrders()
      .subscribe((orders: Order[]) => {
        this.orders = orders;
    });
    this.statuses = Object.values(this.statusesJSON);
    delete this.statusesJSON;

    this.localeService.use('pl');
  }

  isSworn(type) {
    return type === translations.Przysięgłe;
  }

  isObject(val) {
    if (val === null) { return false;}
    return ( (typeof val === 'function') || (typeof val === 'object') );
  }

  getStatus(status) {
    // console.log(this.statuses.indexOf(status));
    // console.log(this.selected.status, this.statuses[status]);
    // return this.selected.status === status;
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

  clear() {
    delete this.selected;
    delete this.selectedIndex;
  }

  save() {
    this.orders[this.selectedIndex] = JSON.parse(JSON.stringify(this.selected));
    this.clear();
  }

  delete() {
    this.orders.splice(this.selectedIndex,1);
    this.clear();
  }

}
