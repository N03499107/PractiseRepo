import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  Messages: String[];
  constructor() { 
    this.Messages = ['New You'];
  }
    
  ngOnInit() {
  }

}
