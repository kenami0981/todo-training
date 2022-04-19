import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CharactersDetailsPage } from './characters-details.page';
import { CharactersDetailsComponentModule } from '../../../projects/team/src/lib/adapters/primary/ui/characters-details.component-module';
import { CharacterIdResolverModule } from 'projects/team/src/lib/adapters/primary/ui/character-id.resolver-module';
import { CharacterIdResolver } from 'projects/team/src/lib/adapters/primary/ui/character-id.resolver';
import { FirebaseCharactersServiceModule } from 'projects/team/src/lib/adapters/secondary/infrastructure/firebase-characters.service-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: CharactersDetailsPage,
          resolve: {
            characterId: CharacterIdResolver
          }
        }
      ]),
  CharactersDetailsComponentModule,
  CharacterIdResolverModule,
  FirebaseCharactersServiceModule
],
  	declarations: [CharactersDetailsPage],
  	providers: [],
  	exports: [] })
export class CharactersDetailsPageModule {
}
