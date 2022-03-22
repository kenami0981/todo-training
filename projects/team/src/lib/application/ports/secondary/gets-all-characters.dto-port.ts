import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { CharactersDTO } from 'projects/team/src/publ/application/ports/secondary/characters.dto';

export const GETS_ALL_CHARACTERS_DTO = new InjectionToken<GetsAllCharactersDtoPort>('GETS_ALL_CHARACTERS_DTO');

export interface GetsAllCharactersDtoPort {
  getAll(criterion?: Partial<CharactersDTO>): Observable<CharactersDTO[]>;
}
