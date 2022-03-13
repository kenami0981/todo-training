import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AlertPromise } from 'selenium-webdriver';

@Component({ selector: 'lib-contact-form', templateUrl: './contact-form.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class ContactFormComponent {
  readonly messageForm: FormGroup = new FormGroup({email: new FormControl(), text: new FormControl()});
  onFormSubmited(messageForm: FormGroup){
    alert("email: " + messageForm.get("email").value +" text: "+  messageForm.get("text").value)
  }
}
