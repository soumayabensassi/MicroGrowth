import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-list-user-back',
  templateUrl: './list-user-back.component.html',
  styleUrls: ['./list-user-back.component.css']
})
export class ListUserBACKComponent implements OnInit {
  list: User[] = [];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      data => this.list = data
    );
  }

}