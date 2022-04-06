import { ActivatedRoute } from '@angular/router';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CharactersDTO } from 'projects/team/src/publ/application/ports/secondary/characters.dto';
import { GETS_ONE_CHARACTERS_DTO, GetsOneCharactersDtoPort } from '../../../application/ports/secondary/gets-one-characters.dto-port';

@Component({ selector: 'lib-characters-details', templateUrl: './characters-details.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class CharactersDetailsComponent {
  character$: Observable<CharactersDTO> = this._getsOneCharactersDto.getOne(this._activatedRoute.snapshot.params.name);
  constructor(
    @Inject(GETS_ONE_CHARACTERS_DTO) 
    private _getsOneCharactersDto: GetsOneCharactersDtoPort,
    private _activatedRoute: ActivatedRoute) {
  }
}
// this._activatedRoute.snapshot.params.characterId