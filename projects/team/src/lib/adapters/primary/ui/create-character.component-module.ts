import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCharacterComponent } from './create-character.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({ imports: [CommonModule, ReactiveFormsModule],
  	declarations: [CreateCharacterComponent],
  	providers: [],
  	exports: [CreateCharacterComponent] })
export class CreateCharacterComponentModule {
}
