import { Component, OnInit, Input } from '@angular/core';
import { OrdersService } from '../../orders.service';
import { Order } from './order';

@Component({
  selector: 'orders-list-details',
  templateUrl: './orders-list-details.component.html',
  styleUrls: ['./orders-list-details.component.css']
})
export class OrdersListDetailsComponent implements OnInit {

//na razie zawieszony do czasu więcej praktyki jak przenieść dane do modala

  @Input()
  order : Order;

  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    // this.order = Object.assign({}, this.order);
    console.log(this.order);
  }

}
