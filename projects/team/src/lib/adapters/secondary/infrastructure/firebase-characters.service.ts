import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllCharactersDtoPort } from '../../../application/ports/secondary/gets-all-characters.dto-port';
import { CharactersDTO } from 'projects/team/src/publ/application/ports/secondary/characters.dto';
import { filterByCriterion } from '@lowgular/shared';

@Injectable()
export class FirebaseCharactersService implements GetsAllCharactersDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  getAll(criterion: CharactersDTO): Observable<CharactersDTO[]> {
    return this._client.collection<CharactersDTO>('characters').valueChanges(({idField: 'id'})).pipe(map((data: CharactersDTO[]) => filterByCriterion(data, criterion)));
  }
}
