import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CharactersPage } from './characters.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: CharactersPage,
        }
      ])],
  	declarations: [CharactersPage],
  	providers: [],
  	exports: [] })
export class CharactersPageModule {
}
