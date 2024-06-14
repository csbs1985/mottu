import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CharacterInterface } from '../../models/character.interface';

@Component({
  selector: 'fcm-card-character',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './card-character.component.html'
})
export class CardCharacterComponent {
  @Input() listCharacters: CharacterInterface[] = [];
}
