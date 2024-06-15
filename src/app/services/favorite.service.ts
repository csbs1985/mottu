import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class FavoriteService {
    private favoriteSubject = new Subject<string[]>();
    favorite$ = this.favoriteSubject.asObservable();

    setFavorite(list: string[]) {
        this.favoriteSubject.next(list);
    }

    getFavorite(): Observable<string[]> {
        return this.favorite$;
    }


    ///////////////////////////////////
    listFavorited: string[] = [];

    getFavorited(): void {
        const favorites = localStorage.getItem('favorites');
        this.listFavorited = favorites ? JSON.parse(favorites) : [];
    }

    toggleFavorite(id: number): void {
        const characterId = id.toString();
        const favorites = localStorage.getItem('favorites');
        const updatedFavorites = favorites ? JSON.parse(favorites) : [];

        this.listFavorited = updatedFavorites.includes(characterId)
            ? updatedFavorites.filter((item: string) => item !== characterId)
            : [...updatedFavorites, characterId];

        localStorage.setItem('favorites', JSON.stringify(this.listFavorited));
    }

    isFavorited(id: number): string {
        return this.listFavorited.find((item: string) => item === id.toString())
            ? 'assets/icons/favorited.png'
            : 'assets/icons/favorite.png';
    }
}