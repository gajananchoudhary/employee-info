import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { AddNewComponent } from './components/add-new/add-new.component'
import { EditEmpComponent } from './components/edit-emp/edit-emp.component'


const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'employees/add',
    component: AddNewComponent,
  },
  {
    path: 'employees/edit',
    component: EditEmpComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
