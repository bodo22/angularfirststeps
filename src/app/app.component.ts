import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>

  <ul>

    <li *ngFor="let message of mailtest.messages">
    {{message.text}}
    </li>

  </ul>
    <app-simple-form *ngFor="let message of mailtest.messages"
    [message]="message.text"
    (updatemessage)="myOnUpdate(message.id, $event.text)"
    >
    </app-simple-form>



  </div>`,
  //templateUrl: './simple-form/simple-form.component.html',
  //new way of connecting: templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myOnUpdate(id, text) {
    this.mailtest.update(id, text);
  }

  constructor(@Inject('mail')  private mailtest) {

  }
}
