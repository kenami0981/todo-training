import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { KontaktPage } from './kontakt.page';
import { ContactFormComponentModule } from '../../../projects/messages/src/lib/adapters/primary/ui/contact-form.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: KontaktPage,
        }
      ]),
  ContactFormComponentModule
],
  	declarations: [KontaktPage],
  	providers: [],
  	exports: [] })
export class KontaktPageModule {
}
