import { Component, OnInit } from '@angular/core';
import {BankingService} from "../../../service/banking/banking.service";
import {Router} from "@angular/router";
import {UserService} from "../../../service/user.service";
import {User} from "../../../Models/user";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  userInfo: User = new User();
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

  constructor(private BankingAccountservice: BankingService,private userservice: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.userservice.getUserInfo().subscribe(
      (data) => {
        this.userInfo = data;
        this.BankingAccountservice.getAccountByidUser(this.userInfo.idUser).subscribe(
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
      },
      (error) => {
        console.log(error);
      }
    );


  }

  gotoPayment() {

    this.router.navigate(['user/bankingaccount/makeTransaction', this.userInfo.idUser]);
  }
  gotoHistory() {
    const myID: number = 1;
    this.router.navigate(['transactionhistory', this.userInfo.idUser]);
  }
}
