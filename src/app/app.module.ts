import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppComponent } from './app.component';
import { AddAnOrderComponent } from './components/add-an-order/add-an-order.component';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { MainPageComponent } from './components/main-page/main-page.component';

import { routerModule } from './app.routing';
import { OrdersService } from './orders.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CustomersService } from './Customers/customers.service';
import { OrderComponent } from './components/order/order.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OrdersListDetailsComponent } from './components/orders-list/orders-list-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAnOrderComponent,
    OrdersListComponent,
    MainPageComponent,
    OrderComponent,
    NavbarComponent,
    OrdersListDetailsComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    NgbModule.forRoot(),
    routerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxDatatableModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [ CustomersService, OrdersService],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
