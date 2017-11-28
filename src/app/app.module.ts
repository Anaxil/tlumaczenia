import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { AddAnOrderComponent } from './components/add-an-order/add-an-order.component';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { MainPageComponent } from './components/main-page/main-page.component';

import { routerModule } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    AddAnOrderComponent,
    OrdersListComponent,
    MainPageComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    routerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
