import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AppAbstracts } from '../../app.abstracts';
import { CardCharacterComponent } from '../../components/card-character/card-character.component';
import { CharacterResponseInterface } from '../../models/character-response.interface';
import { CharacterInterface } from '../../models/character.interface';

@Component({
  selector: 'fcm-inicio-page',
  standalone: true,
  imports: [CommonModule, NgIf, CardCharacterComponent],
  templateUrl: './inicio-page.html'
})
export class InicioPage extends AppAbstracts implements OnInit {
  protected listCharacters: CharacterInterface[] = [];

  ngOnInit(): void {
    this.getCharacters();
  }

  private getCharacters(): void {
    this._subSink= this._apiService.getCharacters().subscribe((data: CharacterResponseInterface) => {
      this.listCharacters = data.results;
    }, error => { this.listCharacters = []; });
  }

  protected keyup(event: KeyboardEvent): void {
    const inputElement = event.target as HTMLInputElement;
    const text = inputElement.value;

    text.length >= 0
      ? this.getCharacterName(text)
      : this.getCharacters();
  }

  private getCharacterName(text: string): void {
    this._subSink= this._apiService.getCharacterName(text).subscribe((data: CharacterResponseInterface) => {
      this.listCharacters = data.results;
    }, error => { this.listCharacters = []; });
  }
}
