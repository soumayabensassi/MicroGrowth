import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['../../../assets/css/style.css']
})
export class HomePageComponent implements OnInit {
  token!:any
  constructor() {    this.token= localStorage.getItem('access_token');}

  ngOnInit(): void {
  }
  ngOnChanges():void{
 window.location.reload()
}
}