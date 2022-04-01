import { FormGroup, FormControl } from '@angular/forms';
import { AlertPromise } from 'selenium-webdriver';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { ADDS_MESSAGES_DTO, AddsMessagesDtoPort } from '../../../application/ports/secondary/adds-messages.dto-port';

@Component({ selector: 'lib-contact-form', templateUrl: './contact-form.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class ContactFormComponent {
  readonly messageForm: FormGroup = new FormGroup({
    email: new FormControl(), 
    text: new FormControl()});

  constructor(@Inject(ADDS_MESSAGES_DTO) private _addsMessagesDto: AddsMessagesDtoPort) {
  }

  onMessageFormSubmited(messageForm: FormGroup): void {
    this._addsMessagesDto.add({
      email: messageForm.get('email').value,
      text: messageForm.get('text').value
    });
    messageForm.reset();
  }
}
 