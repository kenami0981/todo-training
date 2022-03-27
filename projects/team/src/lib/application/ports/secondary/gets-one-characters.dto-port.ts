import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { CharactersDTO } from 'projects/team/src/publ/application/ports/secondary/characters.dto';

export const GETS_ONE_CHARACTERS_DTO = new InjectionToken<GetsOneCharactersDtoPort>('GETS_ONE_CHARACTERS_DTO');

export interface GetsOneCharactersDtoPort {
  getOne(id: string): Observable<CharactersDTO>;
}
