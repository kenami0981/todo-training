import { CharactersDTO } from 'projects/team/src/publ/application/ports/secondary/characters.dto';
import { Observable, of } from 'rxjs';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { GETS_ALL_CHARACTERS_DTO, GetsAllCharactersDtoPort } from '../../../application/ports/secondary/gets-all-characters.dto-port';
import { CONTEXT_DTO_STORAGE, ContextDtoStoragePort } from '../../../application/ports/secondary/context-dto.storage-port';
import { Router } from '@angular/router';


@Component({ selector: 'lib-our-team', templateUrl: './our-team.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class OurTeamComponent {
  
  characters$: Observable<CharactersDTO[]> = this._getsAllCharactersDto.getAll();
  constructor(
    @Inject(GETS_ALL_CHARACTERS_DTO) 
    private _getsAllCharactersDto: GetsAllCharactersDtoPort, @Inject(CONTEXT_DTO_STORAGE)
    private router: Router, @Inject(CONTEXT_DTO_STORAGE) private _contextDtoStorage: ContextDtoStoragePort)  {}
  // onCharacterClicked(character): void {
    
    
 
  onItemClicked(character): void {
    
    this._contextDtoStorage.next({characterId: character.id});
    window.location.hash="#end";

    
      

    

  }
}

