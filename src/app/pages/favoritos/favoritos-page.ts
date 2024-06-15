import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
export class FavoritosPage extends AppAbstracts implements OnInit {
  protected listCharacters: CharacterInterface[] = [];

  ngOnInit(): void {
    this.getFavorite();
  }

  private getFavorite(): void {
    this._subSink.sink = this._favoriteService.favorites$.subscribe(dados => {
      dados.length > 0
        ? this.getCharacterFavorites(dados)
        : this.listCharacters = [];
    });
  }

  private getCharacterFavorites(dados: number[]): void {
    this._subSink.sink = this._apiService.getCharacterFavorites(dados).subscribe((data: any) => {
      this.listCharacters = data;
    }, error => { this.listCharacters = []; });
  }
}
