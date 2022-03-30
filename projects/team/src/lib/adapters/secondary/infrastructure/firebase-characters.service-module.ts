import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseCharactersService } from './firebase-characters.service';
import { GETS_ALL_CHARACTERS_DTO } from '../../../application/ports/secondary/gets-all-characters.dto-port';
import { GETS_ONE_CHARACTERS_DTO } from '../../../application/ports/secondary/gets-one-characters.dto-port';
import { ADDS_CHARACTERS_DTO } from '../../../application/ports/secondary/adds-characters.dto-port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseCharactersService, { provide: GETS_ALL_CHARACTERS_DTO, useExisting: FirebaseCharactersService }, { provide: GETS_ONE_CHARACTERS_DTO, useExisting: FirebaseCharactersService }, { provide: ADDS_CHARACTERS_DTO, useExisting: FirebaseCharactersService }],
  	exports: [] })
export class FirebaseCharactersServiceModule {
}
