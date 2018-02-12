
import { RouterModule, Routes } from '@angular/router';

import { AddAnOrderComponent } from './components/add-an-order/add-an-order.component';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { OrderComponent } from './components/order/order.component';

const routesConfig: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    { path: 'dashboard', component: MainPageComponent },
    { path: 'dodajzlecenie', component: AddAnOrderComponent },
    { path: 'order', component: OrderComponent },
    { path: 'order/:id', component: OrderComponent },
    { path: 'listazlecen', component: OrdersListComponent },
    { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
  ]
  
  export const routerModule = RouterModule.forRoot(routesConfig, {
    enableTracing: false,
    useHash: false
  });