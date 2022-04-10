import { FormGroup, FormControl } from '@angular/forms';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { ADDS_CHARACTERS_DTO, AddsCharactersDtoPort } from '../../../application/ports/secondary/adds-characters.dto-port';

@Component({ 
  selector: 'lib-create-character', 
  templateUrl: './create-character.component.html', 
  encapsulation: ViewEncapsulation.None, 
  changeDetection: ChangeDetectionStrategy.OnPush })


export class CreateCharacterComponent {
  readonly createCharacter: FormGroup = new FormGroup({
    name: new FormControl(), 
    bio: new FormControl(), 
    bioExtended: new FormControl(),
    imageUrl: new FormControl()});

  constructor(@Inject(ADDS_CHARACTERS_DTO) private _addsCharactersDto: AddsCharactersDtoPort) {
  }

  onCreateCharacterSubmited(createCharacter: FormGroup): void {
    if (createCharacter.invalid) {
      return;
    }
    this._addsCharactersDto.add({
      name: createCharacter.get('name').value,
      bio: createCharacter.get('bio').value,
      bioExtended: createCharacter.get('bioExtended').value,
      imageUrl: createCharacter.get('imageUrl').value,
    });
    this.createCharacter.reset();
  }
}
