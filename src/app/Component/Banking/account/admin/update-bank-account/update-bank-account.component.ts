import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BankingService } from 'src/app/service/banking/banking.service';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {compareSegments} from "@angular/compiler-cli/src/ngtsc/sourcemaps/src/segment_marker";

@Component({
  selector: 'app-update-bank-account',
  templateUrl: './update-bank-account.component.html',
  styleUrls: ['./update-bank-account.component.css']
})
export class UpdateBankAccountComponent implements OnInit {
bankaccount:any;
  bankAccountForm!: FormGroup;
  rib!: FormControl;
  amount!: FormControl;
  cover!: FormControl;
  current_WITHDRAWAL_PER_DAY!: FormControl;
  current_CARDPAYMENT_PER_DAY!: FormControl;
  current_BANKTRANSFER_PER_DAY!: FormControl;
  max_WITHDRAWL_PER_DAY!: FormControl;
  max_CARDPAYMENT_PER_DAY!: FormControl;
  max_BANKTRANSFER_PER_DAY!: FormControl;
  idUser!: FormControl;
  submitted = false;
  userid:any;

  constructor(private apiService: BankingService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.apiService.getAccountBankingbyIDBank(params['id'] ).subscribe(
        data => {
          this.bankaccount = data;
          this.userid=this.bankaccount.user.idUser;
          console.log(this.userid)
          this.initializeForm();
          this.bankAccountForm.setValue({
            rib: this.bankaccount.rib,
            amount: this.bankaccount.amount,
            cover: this.bankaccount.cover,
            current_WITHDRAWAL_PER_DAY:this.bankaccount.current_WITHDRAWAL_PER_DAY,
            current_CARDPAYMENT_PER_DAY: this.bankaccount.current_CARDPAYMENT_PER_DAY,
            current_BANKTRANSFER_PER_DAY: this.bankaccount.current_BANKTRANSFER_PER_DAY,
            max_WITHDRAWL_PER_DAY: this.bankaccount.max_WITHDRAWL_PER_DAY,
            max_CARDPAYMENT_PER_DAY: this.bankaccount.max_CARDPAYMENT_PER_DAY,
            max_BANKTRANSFER_PER_DAY: this.bankaccount.max_BANKTRANSFER_PER_DAY,
          });

        },
        error => {
          console.log("Error fetching account.");
        }
      );
    });
  }



  initializeForm() {
    this.rib = new FormControl({value: this.bankaccount.rib, disabled: true});
    this.amount = new FormControl({value: this.bankaccount.amount, disabled: true});
    this.cover = new FormControl(this.bankaccount.cover, [Validators.required, Validators.min(0)]);
    this.current_WITHDRAWAL_PER_DAY = new FormControl(this.bankaccount.currentWithdrawalPerDay || null, [Validators.required, Validators.min(0)]);
    this.current_CARDPAYMENT_PER_DAY = new FormControl(this.bankaccount.currentCardPaymentPerDay, [Validators.required, Validators.min(0)]);
    this.current_BANKTRANSFER_PER_DAY = new FormControl(this.bankaccount.currentBankTransferPerDay, [Validators.required, Validators.min(0)]);
    this.max_WITHDRAWL_PER_DAY = new FormControl(this.bankaccount.maxWithdrawalPerDay, [Validators.required, Validators.min(0)]);
    this.max_CARDPAYMENT_PER_DAY = new FormControl(this.bankaccount.maxCardPaymentPerDay, [Validators.required, Validators.min(0)]);
    this.max_BANKTRANSFER_PER_DAY = new FormControl(this.bankaccount.maxBankTransferPerDay, [Validators.required, Validators.min(0)]);

    this.bankAccountForm = new FormGroup({
      rib: this.rib,
      amount: this.amount,
      cover: this.cover,
      current_WITHDRAWAL_PER_DAY: this.current_WITHDRAWAL_PER_DAY,
      current_CARDPAYMENT_PER_DAY: this.current_CARDPAYMENT_PER_DAY,
      current_BANKTRANSFER_PER_DAY: this.current_BANKTRANSFER_PER_DAY,
      max_WITHDRAWL_PER_DAY: this.max_WITHDRAWL_PER_DAY,
      max_CARDPAYMENT_PER_DAY: this.max_CARDPAYMENT_PER_DAY,
      max_BANKTRANSFER_PER_DAY: this.max_BANKTRANSFER_PER_DAY,
    });
  }

  updateBankAccount() {
    const bankAccountUpdated = {
      idBank: this.bankaccount.idBank,
      user: {
        idUser: this.bankaccount.user.idUser
      },
      rib: this.bankAccountForm.value.rib,
      amount: this.bankAccountForm.value.amount,
      cover: this.bankAccountForm.value.cover,
      current_WITHDRAWAL_PER_DAY: this.bankAccountForm.value.current_WITHDRAWAL_PER_DAY,
      current_CARDPAYMENT_PER_DAY: this.bankAccountForm.value.current_CARDPAYMENT_PER_DAY,
      current_BANKTRANSFER_PER_DAY: this.bankAccountForm.value.current_BANKTRANSFER_PER_DAY,
      max_WITHDRAWL_PER_DAY: this.bankAccountForm.value.max_WITHDRAWL_PER_DAY,
      max_CARDPAYMENT_PER_DAY: this.bankAccountForm.value.max_CARDPAYMENT_PER_DAY,
      max_BANKTRANSFER_PER_DAY: this.bankAccountForm.value.max_BANKTRANSFER_PER_DAY,
    };


    this.apiService.update(bankAccountUpdated).subscribe(
   data => {
     this.router.navigate(['admin/listbank'])
     // Refresh the account list
   },
   error => {
     console.log("Error deleting account.");
   }
 );
  }

  resetControls() {
    this.bankAccountForm.reset();
  }



}







