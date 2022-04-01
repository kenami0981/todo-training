import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { KontaktPage } from './kontakt.page';
import { ContactFormComponentModule } from '../../../projects/messages/src/lib/adapters/primary/ui/contact-form.component-module';
import { NavbarComponentModule } from '../../../projects/navigation/src/lib/adapters/primary/ui/navbar.component-module';
import { FirebaseMessagesServiceModule } from '../../../projects/messages/src/lib/adapters/secondary/infrastructure/firebase-messages.service-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: KontaktPage,
        }
      ]),
  ContactFormComponentModule,
  NavbarComponentModule,
  FirebaseMessagesServiceModule
],
  	declarations: [KontaktPage],
  	providers: [],
  	exports: [] })
export class KontaktPageModule {
}
