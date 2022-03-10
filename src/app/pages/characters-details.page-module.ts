import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CharactersDetailsPage } from './characters-details.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: CharactersDetailsPage,
        }
      ])],
  	declarations: [CharactersDetailsPage],
  	providers: [],
  	exports: [] })
export class CharactersDetailsPageModule {
}
