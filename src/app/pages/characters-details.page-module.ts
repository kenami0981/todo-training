import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CharactersDetailsPage } from './characters-details.page';
import { CharactersDetailsComponentModule } from '../../../projects/team/src/lib/adapters/primary/ui/characters-details.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: CharactersDetailsPage,
        }
      ]),
  CharactersDetailsComponentModule
],
  	declarations: [CharactersDetailsPage],
  	providers: [],
  	exports: [] })
export class CharactersDetailsPageModule {
}
