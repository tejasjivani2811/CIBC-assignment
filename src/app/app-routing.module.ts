import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactiondetailComponent } from './transactiondetail/transactiondetail.component';
import { TransactionlistComponent } from './transactionlist/transactionlist.component';

const routes: Routes = [
  { path:  '', redirectTo: '/transactionList', pathMatch: 'full',   }, 
  { path:  'transactionList', component: TransactionlistComponent },
  { path:  'transactionDetail', component: TransactiondetailComponent },
  { path:  'transactionDetail/:id', component: TransactiondetailComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
