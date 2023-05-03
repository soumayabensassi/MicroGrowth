import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-downloadsuccesfull',
  templateUrl: './downloadsuccesfull.component.html',
  styleUrls: ['./downloadsuccesfull.component.css']
})
export class DownloadsuccesfullComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  gotoHomepage(){this.router.navigate(['user/bankingaccount'])}
}
