import { CommonModule, NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppAbstracts } from '../../app.abstracts';
import { CardCharacterComponent } from '../../components/card-character/card-character.component';
import { CharacterResponseInterface } from '../../models/character-response.interface';
import { CharacterInterface } from '../../models/character.interface';

@Component({
  selector: 'fcm-inicio-page',
  standalone: true,
  imports: [CommonModule, NgIf, CardCharacterComponent],
  templateUrl: './inicio-page.component.html',
  styleUrl: './inicio-page.component.scss'
})
export class InicioPageComponent extends AppAbstracts implements OnInit, OnDestroy {
  protected listCharacters: CharacterInterface[] = [];
  private subscription!: Subscription;

  ngOnInit(): void {
    this.getCharacters();
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  private getCharacters(): void {
    this.subscription = this._apiService.getCharacters().subscribe((data: CharacterResponseInterface) => {
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
    this.subscription = this._apiService.getCharacterName(text).subscribe((data: CharacterResponseInterface) => {
      this.listCharacters = data.results;
    }, error => { this.listCharacters = []; });
  }
}
