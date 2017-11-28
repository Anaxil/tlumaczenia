import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnOrderComponent } from './add-an-order.component';

describe('AddAnOrderComponent', () => {
  let component: AddAnOrderComponent;
  let fixture: ComponentFixture<AddAnOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAnOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAnOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
