import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutUsPage } from './about-us.page';
import { OurTeamComponentModule } from '../../../projects/team/src/lib/adapters/primary/ui/our-team.component-module';
import { FirebaseCharactersServiceModule } from '../../../projects/team/src/lib/adapters/secondary/infrastructure/firebase-characters.service-module';
import { CharactersDetailsComponentModule } from '../../../projects/team/src/lib/adapters/primary/ui/characters-details.component-module';
import { CharacterIdResolverModule } from 'projects/team/src/lib/adapters/primary/ui/character-id.resolver-module';
import { CharactersDetailsPageModule } from './characters-details.page-module';

@NgModule({ 
  imports: [CommonModule, 
    FirebaseCharactersServiceModule,
      RouterModule.forChild([
        {
          path: '',
          component: AboutUsPage,
          children: [{ 
            path: ':characterId', 
            loadChildren: () => CharactersDetailsPageModule
          }]
          
        }
      ]),
  OurTeamComponentModule,
    CharactersDetailsComponentModule,
  ],
  	declarations: [AboutUsPage],
  	providers: [],
  	exports: [] })
export class AboutUsPageModule {
}
