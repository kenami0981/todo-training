import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllCharactersDtoPort } from '../../../application/ports/secondary/gets-all-characters.dto-port';
import { CharactersDTO } from 'projects/team/src/publ/application/ports/secondary/characters.dto';
import { filterByCriterion } from '@lowgular/shared';
import { GetsOneCharactersDtoPort } from '../../../application/ports/secondary/gets-one-characters.dto-port';
import { AddsCharactersDtoPort } from '../../../application/ports/secondary/adds-characters.dto-port';

@Injectable()
export class FirebaseCharactersService implements GetsAllCharactersDtoPort, GetsOneCharactersDtoPort, AddsCharactersDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  getAll(criterion: CharactersDTO): Observable<CharactersDTO[]> {
    return this._client.collection<CharactersDTO>('characters-list').valueChanges(({idField: 'id'})).pipe(map((data: CharactersDTO[]) => filterByCriterion(data, criterion)));
  }

  getOne(id: string): Observable<CharactersDTO> {
    return this._client.doc<CharactersDTO>('characters-list/'+id).valueChanges({idField: 'id'});
  }

  add(characters: CharactersDTO): void {
    this._client.collection('characters-list').add(characters);
  }
}
