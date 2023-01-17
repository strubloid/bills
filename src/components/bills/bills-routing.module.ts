import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillsComponent } from 'src/components/bills/bills.component'
import { BillsListComponent } from 'src/components/bills/list/bills.list.component'

const routes: Routes = [
    {path : 'bill/add', component : BillsComponent},
    {path : 'bill/list', component : BillsListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BillsRoutingModule { }
