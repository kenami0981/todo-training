import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersDetailsComponent } from './characters-details.component';

@NgModule({ imports: [CommonModule],
  	declarations: [CharactersDetailsComponent],
  	providers: [],
  	exports: [CharactersDetailsComponent] })
export class CharactersDetailsComponentModule {
}
