import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {
  showChatbot = false;

  constructor() { }

  ngOnInit(): void {
    
  }
  
  toggleChatbot() {
    this.showChatbot = !this.showChatbot;
  }

}
