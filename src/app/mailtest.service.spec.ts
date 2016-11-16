/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MailtestService } from './mailtest.service';

describe('MailtestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MailtestService]
    });
  });

  it('should ...', inject([MailtestService], (service: MailtestService) => {
    expect(service).toBeTruthy();
  }));
});
