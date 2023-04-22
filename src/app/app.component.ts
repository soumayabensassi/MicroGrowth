import { Component } from '@angular/core';
import { UserService } from './service/user.service';
import { User } from './Models/user';
import { Console } from 'console';

@Component({
  selector: 'body',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {

  }
