import { Component, OnInit } from '@angular/core';

import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
const now = new Date();

@Component({
  selector: 'add-an-order',
  templateUrl: './add-an-order.component.html',
  styleUrls: ['./add-an-order.component.css']
})
export class AddAnOrderComponent implements OnInit {

  orderId = 1;

  constructor() { }

  ngOnInit() {
  }


  active(form) {
    form.target.nextElementSibling.classList.add("active")
  }

  inActive(form) {
    if(form.target.value.length <=0)
    form.target.nextElementSibling.classList.remove("active")
  }


  model: NgbDateStruct;
  date: {year: number, month: number};

  selectToday() {
    this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }
}
