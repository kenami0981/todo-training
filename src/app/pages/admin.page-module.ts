import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminPage } from './admin.page';
import { CreateCharacterComponentModule } from '../../../projects/team/src/lib/adapters/primary/ui/create-character.component-module';
import { FirebaseCharactersServiceModule } from '../../../projects/team/src/lib/adapters/secondary/infrastructure/firebase-characters.service-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: AdminPage,
        }
      ]),
  CreateCharacterComponentModule,
  FirebaseCharactersServiceModule
],
  	declarations: [AdminPage],
  	providers: [],
  	exports: [] })
export class AdminPageModule {
}
