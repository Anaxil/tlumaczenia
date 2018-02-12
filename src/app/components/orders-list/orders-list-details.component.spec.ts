import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersListDetailsComponent } from './orders-list-details.component';

describe('OrdersListDetailsComponent', () => {
  let component: OrdersListDetailsComponent;
  let fixture: ComponentFixture<OrdersListDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersListDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
