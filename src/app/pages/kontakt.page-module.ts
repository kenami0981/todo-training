import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { KontaktPage } from './kontakt.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: KontaktPage,
        }
      ])],
  	declarations: [KontaktPage],
  	providers: [],
  	exports: [] })
export class KontaktPageModule {
}
