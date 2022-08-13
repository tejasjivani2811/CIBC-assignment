import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserTransactionList } from '../data/usertransactiondata';
import { TransactionServiceService } from '../services/transaction-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-transactiondetail',
  templateUrl: './transactiondetail.component.html',
  styleUrls: ['./transactiondetail.component.scss']
})
export class TransactiondetailComponent implements OnInit {
  userTransactionList = UserTransactionList;
  form!: FormGroup;
  comment = new FormControl('', Validators.required);
  id! : number;
  date! : Date;
  mode: string = "";
  
  constructor(private transactionService: TransactionServiceService, private router : Router,
    private activatedRoute : ActivatedRoute, private _snackBar: MatSnackBar) 
  {
    

  }



  ngOnInit(): void {
    const ID = this.activatedRoute.snapshot.params['id']; 
    if(ID != undefined && ID != null)
    {
      this.mode = "Update";
      this.transactionService.getUserTransactionByGivenId(ID).then(
        response => {
          debugger
          const getResponse : any = response;
          this.id = parseInt(getResponse.id);
          this.date = getResponse.date
          this.comment.setValue(getResponse.comment);
        },
        error => {
          console.log("error " + error);
        }
        );
    }   
    else
    {
      this.mode = "Save";
      if(this.userTransactionList.length > 0)
      {
        const ids = this.userTransactionList.map(object => {
          return object.id;
        });
        
        const max = Math.max(...ids);
        this.id = max + 1;
        this.date = new Date();
      } 

    }
  }

  // On submit event
  onSubmit()
  {
    const transactionModel = {
      id: this.id ,
      date: this.date,
      comment: this.comment.value,
    };

    if(this.mode == "Save")
    {
      //Save list
      this.transactionService.saveTransactionUser(transactionModel).then(
        response => {
          debugger
          this.openSnackBar();
          this.router.navigate(["/transactionList"]);
        },
        error => {
          console.log("error " + error);
        }
        );
    }
    else
    {
      // Update the list
      this.transactionService.updateTransactionUser(transactionModel).then(
        response => {
          debugger
          this.openSnackBar();
          this.router.navigate(["/transactionList"]);
        },
        error => {
          console.log("error " + error);
        }
        );
    }

  }

  // Open success message
  openSnackBar() {
    this._snackBar.open("Transaction details saved successfully","Close", {
      duration: 3000
    });
  }

}
