import { Component, OnInit } from '@angular/core';
import {BankingService} from "../../../service/banking/banking.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  BankingAccount: any;
  bankAccount: {
    max_WITHDRAWL_PER_DAY: any;
    amount: any;
    max_CARDPAYMENT_PER_DAY: any;
    rib: any;
    cover: any;
    current_WITHDRAWAL_PER_DAY: any;
    dateAcount: any;
    transactionList: any;
    current_BANKTRANSFER_PER_DAY: any;
    max_BANKTRANSFER_PER_DAY: any;
    typeAccount: any;
    idBank: any;
    current_CARDPAYMENT_PER_DAY: any;
    max_OCC_PER_DAY: any;
  } | undefined;

  constructor(private BankingAccountservice: BankingService, private router: Router) {
  }

  ngOnInit(): void {
    const myID: number = 1;
    this.BankingAccountservice.getAccountByidUser(myID).subscribe(
      data => {
        console.log(data);
        this.BankingAccount = data
        this.bankAccount = {
          amount: this.BankingAccount.amount,
          cover: this.BankingAccount.cover,
          current_BANKTRANSFER_PER_DAY: this.BankingAccount.current_BANKTRANSFER_PER_DAY,
          current_CARDPAYMENT_PER_DAY: this.BankingAccount.current_CARDPAYMENT_PER_DAY,
          current_WITHDRAWAL_PER_DAY: this.BankingAccount.current_WITHDRAWAL_PER_DAY,
          dateAcount: this.BankingAccount.dateAcount,
          idBank: this.BankingAccount.idBank,
          max_BANKTRANSFER_PER_DAY: this.BankingAccount.max_BANKTRANSFER_PER_DAY,
          max_CARDPAYMENT_PER_DAY: this.BankingAccount.max_CARDPAYMENT_PER_DAY,
          max_OCC_PER_DAY: this.BankingAccount.max_OCC_PER_DAY,
          max_WITHDRAWL_PER_DAY: this.BankingAccount.max_WITHDRAWL_PER_DAY,
          rib: this.BankingAccount.rib,
          transactionList: this.BankingAccount.transactionList,
          typeAccount: this.BankingAccount.typeAccount,

        };
      },
      error => {
        console.log("Error deleting account.");
      }
    );
  }

  gotoPayment() {
    const myID: number = 1;
    this.router.navigate(['user/bankingaccount/makeTransaction', myID]);
  }
  gotoHistory() {
    const myID: number = 1;
    this.router.navigate(['transactionhistory', myID]);
  }
}
