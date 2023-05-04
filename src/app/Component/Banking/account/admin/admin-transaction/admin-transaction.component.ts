import { Component, OnInit } from '@angular/core';
import { BankingService } from "../../../../../service/banking/banking.service";
import { Router } from "@angular/router";
import { TransactionserviceService } from "../../../../../service/transactionservice.service";


@Component({
  selector: 'app-admin-transaction',
  templateUrl: './admin-transaction.component.html',
  styleUrls: ['./admin-transaction.component.css']
})
export class AdminTransactionComponent implements OnInit {
  list: any;
  searchTerm: string = '';

  filteredList: any;


  constructor(private transactionservice: TransactionserviceService, private router: Router) { }

  ngOnInit(): void {
    this.getall();
  }

  getall() {
    this.transactionservice.getTransactions().subscribe(
      data => {
        // Success response
        this.list = data;
        this.filteredList = data;
        console.log('Received data:', data);
      },
      error => {
        // Error response
        console.error('Error occurred:', error);
        // Handle the error as needed
      }
    );
  }

  deleteTransaction(id: number) {
    this.transactionservice.deleteTransaction(id).subscribe(
      data => {
        console.log("Account deleted successfully.");
        // Refresh the account list
        this.getall();
      },
      error => {
        console.log("Error deleting account.");
        this.getall();
      }
    );
  }



filterList() {
  this.filteredList = this.list.filter((x: any) => {
    return x.ribSource.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      x.ribReceiver.toLowerCase().includes(this.searchTerm.toLowerCase());
  });
}


}
