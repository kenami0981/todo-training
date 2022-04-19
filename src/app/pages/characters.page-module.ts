import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CharactersPage } from './characters.page';
import { OurTeamComponentModule } from '../../../projects/team/src/lib/adapters/primary/ui/our-team.component-module';
import { FirebaseCharactersServiceModule } from '../../../projects/team/src/lib/adapters/secondary/infrastructure/firebase-characters.service-module';
import { CharactersDetailsComponentModule } from '../../../projects/team/src/lib/adapters/primary/ui/characters-details.component-module';
import { CharactersDetailsPageModule } from './characters-details.page-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: CharactersPage,
          children: [{ 
                  path: ':characterId', 
                  loadChildren: () => CharactersDetailsPageModule
                }]
        }
      ]),
  OurTeamComponentModule,
  FirebaseCharactersServiceModule,
  CharactersDetailsComponentModule
],
  	declarations: [CharactersPage],
  	providers: [],
  	exports: [] })
export class CharactersPageModule {
}
