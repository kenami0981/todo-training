import { InjectionToken } from '@angular/core';
import { CharactersDTO } from 'projects/team/src/publ/application/ports/secondary/characters.dto';

export const ADDS_CHARACTERS_DTO = new InjectionToken<AddsCharactersDtoPort>('ADDS_CHARACTERS_DTO');

export interface AddsCharactersDtoPort {
  add(characters: Partial<CharactersDTO>): void;
}
