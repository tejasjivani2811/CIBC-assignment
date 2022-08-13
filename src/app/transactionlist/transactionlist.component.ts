import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { UserTransactionList } from '../data/usertransactiondata';
import { UserTransactionModel } from '../model/usertransactionmodel';
import { TransactionServiceService } from '../services/transaction-service.service';
@Component({
  selector: 'app-transactionlist',
  templateUrl: './transactionlist.component.html',
  styleUrls: ['./transactionlist.component.scss']
})
export class TransactionlistComponent implements OnInit {
  displayedColumns: string[] = ['id', 'date', 'comments', 'action'];
  @ViewChild(MatSort) sort: MatSort;
  dataSource: any = [];

  constructor(private transactionService: TransactionServiceService) { 

  }
 
  // Get all transaction list
  ngOnInit(): void {
    let a =  this.transactionService.getAllUserTransactionList().then(
      response => {
        this.dataSource = response; 
      },
      error => {
        console.log("error " + error);
      }
      );
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

}

