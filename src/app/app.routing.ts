
import { RouterModule, Routes } from '@angular/router';

import { AddAnOrderComponent } from './components/add-an-order/add-an-order.component';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { MainPageComponent } from './components/main-page/main-page.component';

const routesConfig: Routes = [
    { path: '', redirectTo: 'mainpage', pathMatch: 'full'},
    { path: 'mainpage', component: MainPageComponent },
    { path: 'addorder', component: AddAnOrderComponent },
    { path: 'orderslist', component: OrdersListComponent },
    { path: '**', redirectTo: 'mainpage', pathMatch: 'full' }
  ]
  
  export const routerModule = RouterModule.forRoot(routesConfig, {
    enableTracing: false,
    useHash: false
  });