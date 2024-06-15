import { CommonModule, NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
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
  protected listFavorites: number[] = [];

  ngOnInit(): void {
    this.getFavorite();
  }

  private async getFavorite(): Promise<void> {
    this._subSink.sink = await this._favoriteService.favorites$.subscribe(dados => {
      this.listFavorites = dados;
    });

    if (this.listFavorites.length > 0) {
      this._subSink.sink = this._apiService.getCharacterFavorites(this.listFavorites).subscribe((data: any) => {
        this.listCharacters = data;
      }, error => { this.listCharacters = []; });
    }
  }
}
