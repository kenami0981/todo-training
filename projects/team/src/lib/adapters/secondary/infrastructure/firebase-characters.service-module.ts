import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseCharactersService } from './firebase-characters.service';
import { GETS_ALL_CHARACTERS_DTO } from '../../../application/ports/secondary/gets-all-characters.dto-port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseCharactersService, { provide: GETS_ALL_CHARACTERS_DTO, useExisting: FirebaseCharactersService }],
  	exports: [] })
export class FirebaseCharactersServiceModule {
}
