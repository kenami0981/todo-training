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
    private _getsAllCharactersDto: GetsAllCharactersDtoPort, @Inject(CONTEXT_DTO_STORAGE) private _contextDtoStorage: ContextDtoStoragePort,
    private router: Router)  {}
  onCharacterClicked(character): void {
    
    this._contextDtoStorage.next({characterId: character.id});
    
    var paths = this.router.url.split('#')[0];
    if(paths=="/home") {
      window.location.href="/postacie";};
      


    if (this.router.url==paths+"#characters-details"){
      window.location.href=paths+"#characters-details";
      var x = document.getElementById('test');if (x.style.display==='none') {x.style.display='block';};}
    else {
      window.location.href=paths+"#characters-details";
      var x = document.getElementById('test');if (x.style.display==='none') {x.style.display='block';
  };
    }

    
  }
}

