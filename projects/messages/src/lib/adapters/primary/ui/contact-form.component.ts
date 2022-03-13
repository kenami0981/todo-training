import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({ selector: 'lib-contact-form', templateUrl: './contact-form.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class ContactFormComponent {
  readonly messageForm: FormGroup = new FormGroup({email: new FormControl(), text: new FormControl()});
  onFormSubmited(messageForm: FormGroup): void {console.log(messageForm.getRawValue());}
}
