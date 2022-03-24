import { CharactersDTO } from 'projects/team/src/publ/application/ports/secondary/characters.dto';
import { Observable, of } from 'rxjs';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { GETS_ALL_CHARACTERS_DTO, GetsAllCharactersDtoPort } from '../../../application/ports/secondary/gets-all-characters.dto-port';

@Component({ selector: 'lib-our-team', templateUrl: './our-team.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class OurTeamComponent {
  characters$: Observable<CharactersDTO[]> = this._getsAllCharactersDto.getAll();

  constructor(@Inject(GETS_ALL_CHARACTERS_DTO) private _getsAllCharactersDto: GetsAllCharactersDtoPort) {
  }

}

