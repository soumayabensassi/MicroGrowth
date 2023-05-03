import { Component, OnInit } from '@angular/core';
import { BankingService } from 'src/app/service/banking/banking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminaccount',
  templateUrl: './adminaccount.component.html',
  styleUrls: ['./adminaccount.component.css']
})
export class AdminaccountComponent implements OnInit {
  list: any;
  constructor(private bankingservice:BankingService, private router: Router) { }

  ngOnInit(): void {
    this.getaccounts();
  }
  getaccounts()
  {
    this.bankingservice.getAccountsBanking().subscribe(
      data => {
        // Success response
        this.list = data;
        console.log('Received data:', data);
      },
      error => {
        // Error response
        console.error('Error occurred:', error);
        // Handle the error as needed
      }
    );
  }
  deleteAccount(id: number) {
    this.bankingservice.delete(id).subscribe(
      data => {
        console.log("Account deleted successfully.");
        // Refresh the account list
        this.getaccounts();
      },
      error => {
        console.log("Error deleting account.");
      }
    );
  }
  goToUpdateForm(idEtudiant: number) {
   this.router.navigate(['admin/updatebankaccount', idEtudiant]);



}

}
