import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CharactersPage } from './characters.page';
import { OurTeamComponentModule } from '../../../projects/team/src/lib/adapters/primary/ui/our-team.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: CharactersPage,
        }
      ]),
  OurTeamComponentModule
],
  	declarations: [CharactersPage],
  	providers: [],
  	exports: [] })
export class CharactersPageModule {
}
