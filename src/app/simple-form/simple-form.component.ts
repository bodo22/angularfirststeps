import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      <input #myInput type="test" [(ngModel)]="message">
      <button (click)="updatemessage.emit({text:message})">Click me</button>
    </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

@Input() message;

@Output() updatemessage = new EventEmitter();


  constructor() {
    //setInterval(()=> this.messagetosf = Math.random().toString(), 1000);
  }

  ngOnInit() {
  }

}
