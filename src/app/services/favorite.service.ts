import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class FavoriteService {
    listFavorited: string[] = [];

    toggleFavorite(id: number): void {
        const characterId = id.toString();
        const favorites = localStorage.getItem('favorites');
        const updatedFavorites = favorites ? JSON.parse(favorites) || [] : [];

        this.listFavorited = updatedFavorites.includes(characterId)
            ? updatedFavorites.filter((item: string) => item !== characterId)
            : [...updatedFavorites, characterId];

        localStorage.setItem('favorites', JSON.stringify(this.listFavorited));
    }

    isFavorited(id: number): string {
        const favorites = localStorage.getItem('favorites');
        this.listFavorited = favorites ? JSON.parse(favorites) || [] : [];

        return this.listFavorited.find((item: string) => item === id.toString())
            ? 'assets/icons/favorited.png'
            : 'assets/icons/favorite.png';
    }
}