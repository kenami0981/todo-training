import { ActivatedRoute } from '@angular/router';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CharactersDTO } from 'projects/team/src/publ/application/ports/secondary/characters.dto';
import { GETS_ONE_CHARACTERS_DTO, GetsOneCharactersDtoPort } from '../../../application/ports/secondary/gets-one-characters.dto-port';
import { switchMap } from 'rxjs/operators';
import { CONTEXT_DTO_STORAGE, ContextDtoStoragePort } from '../../../application/ports/secondary/context-dto.storage-port';

@Component({ selector: 'lib-characters-details', templateUrl: './characters-details.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class CharactersDetailsComponent {
  character$: Observable<CharactersDTO> = this._contextDtoStoragePort.asObservable()
  .pipe(
    switchMap(data => this._getsOneCharactersDto.getOne(data.characterId)));

  constructor(
    @Inject(GETS_ONE_CHARACTERS_DTO) 
    private _getsOneCharactersDto: GetsOneCharactersDtoPort, @Inject(CONTEXT_DTO_STORAGE) private _contextDtoStoragePort: ContextDtoStoragePort) {
  }
}