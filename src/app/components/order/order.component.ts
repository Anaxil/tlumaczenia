import { Component, OnInit } from '@angular/core';
import { Order } from '../orders-list/order';
import { OrdersService } from '../../orders.service';
import { ActivatedRoute } from '@angular/router';
import { CustomersService } from '../../Customers/customers.service';

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  order : Order;
  customerid = 1;
  customer;

  constructor(private ordersService: OrdersService,
              private route: ActivatedRoute,
              private customersService: CustomersService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.ordersService.getOrder(id)
      .subscribe( (order: Order) => this.order = order);
    this.customersService.getCustomer(this.customerid)
      .subscribe(customer => this.customer = customer);

  }

  active(form) {
    form.target.nextElementSibling.classList.add("active")
  }

  inActive(form) {
    if(form.target.value.length <=0)
    form.target.nextElementSibling.classList.remove("active")
  }

}
