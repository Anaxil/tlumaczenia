import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-an-order',
  templateUrl: './add-an-order.component.html',
  styleUrls: ['./add-an-order.component.scss']
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

}
