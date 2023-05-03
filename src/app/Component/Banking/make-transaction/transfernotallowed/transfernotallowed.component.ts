import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-transfernotallowed',
  templateUrl: './transfernotallowed.component.html',
  styleUrls: ['./transfernotallowed.component.css']
})
export class TransfernotallowedComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  gotoHomepage(){this.router.navigate(['user/bankingaccount'])}
}
