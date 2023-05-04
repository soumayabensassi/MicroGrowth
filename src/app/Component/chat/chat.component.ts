import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.router.navigateByUrl('http://localhost:8082/MicroGrowth');
  }
  ouvrirChat() {
    window.open('http://localhost:8082/MicroGrowth', '_blank');
  }
}
