import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent} from './navbar/navbar.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { MaterialTableComponent } from './material-table/material-table.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'table', component: MaterialTableComponent },
];
@NgModule({
  exports: [ RouterModule ]
})
export class AppRoutingModule {}