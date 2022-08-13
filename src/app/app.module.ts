import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionServiceService } from './services/transaction-service.service';
import { TransactionlistComponent } from './transactionlist/transactionlist.component';
import { TransactiondetailComponent } from './transactiondetail/transactiondetail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlphanumericDirective } from './directive/alphanumeric.directive';

@NgModule({
  declarations: [
    AppComponent,
    TransactionlistComponent,
    TransactiondetailComponent,
    AlphanumericDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
   
  ],
  // exports:[
  //   ReactiveFormsModule
  // ],
  providers: [TransactionServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
