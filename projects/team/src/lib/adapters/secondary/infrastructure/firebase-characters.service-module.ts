import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseCharactersService } from './firebase-characters.service';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseCharactersService],
  	exports: [] })
export class FirebaseCharactersServiceModule {
}
