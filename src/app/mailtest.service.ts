import { Injectable } from '@angular/core';

@Injectable()
export class MailtestService {

  messages = [
    {id: 0, text:`youre now friends with john`},
    {id: 1, text:`look at johns last tweet`},
    {id: 2, text:`take a look at what john said`}
  ];

  update(id, text) {
    this.messages = this.messages.map(m =>
      m.id === id ? {id, text} : m
    )
  }

  constructor() { }

}
