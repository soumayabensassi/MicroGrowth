import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChangeEventArgs } from '@syncfusion/ej2-angular-calendars';
import {BankingService} from "../../../../service/banking/banking.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-transactionhistory',
  templateUrl: './transactionhistory.component.html',
  styleUrls: ['./transactionhistory.component.css']
})
export class TransactionhistoryComponent implements OnInit {
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

  constructor(private apiService: BankingService,private http: HttpClient,private router: Router,private route: ActivatedRoute) {
  }

  public minDate: Date = new Date("01/01/2023");
  public maxDate: Date = new Date();
  public value: Date = new Date();
  public minDate2: Date = new Date("01/01/2023");
  public maxDate2: Date = new Date();
  public value2: Date = new Date();
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

  onDateSelect1(args: ChangeEventArgs) {
    const selectedDate: Date = args.value as Date;
    this.value=selectedDate// retrieve the selected date value
    console.log(selectedDate);

  }
  onDateSelect2(args: ChangeEventArgs) {
    const selectedDate: Date = args.value as Date;
    this.value2=selectedDate;// retrieve the selected date value
    console.log(selectedDate);

  }
  downloadTransactionHistory(){
    let string;

    if (this.value && this.value2) {
      // Format start and end dates as YYYY-MM-DD strings
      const startStr = this.value.toISOString().substr(0, 10);
      const endStr = this.value2.toISOString().substr(0, 10);
console.log(startStr);
      // Send HTTP request to download history for the specified date range
      const rib: string = this.bankAccount?.rib;
      this.apiService.download(rib, startStr, endStr).subscribe(data => {
        // @ts-ignore
        const blob = new Blob([data], {type: 'application/octet-stream'});
        const downloadUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = `transaction_history_${startStr}_to_${endStr}.pdf`;
        link.click();
        window.URL.revokeObjectURL(downloadUrl);
        this.router.navigate(['downloadsuccesfull'])
      });
    }
}

}
