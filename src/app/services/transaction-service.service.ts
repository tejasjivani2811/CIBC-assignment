import { Injectable } from '@angular/core';
import { UserTransactionList } from '../data/usertransactiondata';
import { UserTransactionModel } from '../model/usertransactionmodel';
@Injectable({
  providedIn: 'root'
})
export class TransactionServiceService {

  userTransactionList = UserTransactionList;
  constructor() { 

  }

  getAllUserTransactionList() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = this.userTransactionList;
        resolve(data);
      });
    });
  }


  getUserTransactionByGivenId(id: any) {
    let transaction = this.userTransactionList.find(t => t.id == id);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(transaction);
      });
    });
  }

  saveTransactionUser(model: UserTransactionModel) {
    this.userTransactionList.push(model);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.userTransactionList);
      });
    });
  }

  updateTransactionUser(model: UserTransactionModel) {
    let updateItem: UserTransactionModel = this.userTransactionList.find(t => t.id == model.id)!;
    let index = this.userTransactionList.indexOf(updateItem);
    this.userTransactionList[index] = model;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.userTransactionList);
      });
    });
  }


}
