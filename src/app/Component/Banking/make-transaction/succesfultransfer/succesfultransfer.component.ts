import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-succesfultransfer',
  templateUrl: './succesfultransfer.component.html',
  styleUrls: ['./succesfultransfer.component.css']
})
export class SuccesfultransferComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  gotoHomepage(){this.router.navigate(['user/bankingaccount'])}
}
