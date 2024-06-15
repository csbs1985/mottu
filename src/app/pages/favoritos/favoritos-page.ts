import { CommonModule, NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppAbstracts } from '../../app.abstracts';
import { CardCharacterComponent } from '../../components/card-character/card-character.component';
import { CharacterInterface } from '../../models/character.interface';

@Component({
  selector: 'fcm-favoritos-page',
  standalone: true,
  imports: [CommonModule, NgIf, CardCharacterComponent, RouterLink],
  templateUrl: './favoritos-page.html'
})
export class FavoritosPage extends AppAbstracts implements OnInit, OnDestroy {
  protected listCharacters: CharacterInterface[] = [];
  private subscription!: Subscription;

  ngOnInit(): void {
    this.getCharacters();
    this._favoriteService.getFavorited();
  }

  private getCharacters(): void {
    const list = this._favoriteService.listFavorited;

    if (list) {
      this.subscription = this._apiService.getCharacterFavorites(list).subscribe((data: any) => {
        this.listCharacters = data;
      }, error => { this.listCharacters = []; });
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
