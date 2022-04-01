import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseMessagesService } from './firebase-messages.service';
import { ADDS_MESSAGES_DTO } from '../../../application/ports/secondary/adds-messages.dto-port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseMessagesService, { provide: ADDS_MESSAGES_DTO, useExisting: FirebaseMessagesService }, ],
  	exports: [] })
export class FirebaseMessagesServiceModule {
}
