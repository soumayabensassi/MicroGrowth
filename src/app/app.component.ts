import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MicroGrowth';
  userIsAdmin!:any
  constructor() {
    this.userIsAdmin='[ROLE_USER]'
  }
}
