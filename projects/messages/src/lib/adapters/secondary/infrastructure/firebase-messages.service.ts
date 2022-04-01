import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AddsMessagesDtoPort } from '../../../application/ports/secondary/adds-messages.dto-port';
import { MessagesDTO } from '../../../application/ports/secondary/messages.dto';

@Injectable()
export class FirebaseMessagesService implements AddsMessagesDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  add(messages: Partial<MessagesDTO>): void {
    this._client.collection('messages').add(messages);
  }

}
