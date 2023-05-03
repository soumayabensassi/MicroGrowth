import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BankingService } from 'src/app/service/banking/banking.service';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-make-transaction',
  templateUrl: './make-transaction.component.html',
  styleUrls: ['./make-transaction.component.css']
})
export class MakeTransactionComponent implements OnInit {
  TransactionForm!: FormGroup;
  ribNumber!: FormControl;
  amount!: FormControl;

  submitted = false;
  BankAccount: any;
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
Transaction: any;
  currentDate: Date = new Date();
  formBuilder: any;

  constructor(private apiService: BankingService, private route: ActivatedRoute, private router: Router) {
    this.initForm();
    this.createForm();
  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.apiService.getAccountByidUser(params['id']).subscribe(
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

    });
  }
  initForm()
  {
    this.amount = new FormControl('', [Validators.required]);
    this.ribNumber = new FormControl('', [Validators.required]);

  }
  createForm() {
    this.TransactionForm = new FormGroup({
      amount: this.amount,
      ribNumber :this.ribNumber,

    });
  }
  makePayment() {

    const givenTransaction = {

      amountTransaction: this.TransactionForm.value.amount,
      dateTransaction: new Date(),
      ribSource: this.bankAccount?.rib,
      ribReceiver:this.TransactionForm.value.ribNumber,
      typeTransaction:  "BANK_TRANSFER",
    }
    console.log(givenTransaction.typeTransaction);

      this.apiService.makeTransfer(givenTransaction).subscribe(
        data => {
          this.router.navigate(['succesfultransfer'])
          // Refresh the account list
        },
        error => {
          this.router.navigate(['transfernotallowed'])
        }
      );



    }


  }

