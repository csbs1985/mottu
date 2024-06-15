import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class FavoriteService {
    private listFavorites: number[] = [];

    favorites$ = new Subject<number[]>();

    isFavorited(idObjeto: number): void {
        return this.listFavorites.includes(idObjeto)
            ? this.deleteFavorite(idObjeto)
            : this.saveFavorite(idObjeto);
    }

    saveFavorite(idObjeto: number): void {
        if (!this.listFavorites.includes(idObjeto)) {
            this.listFavorites.push(idObjeto);
            this.favorites$.next(this.listFavorites);
        }
    }

    deleteFavorite(idObjeto: number): void {
        const index = this.listFavorites.indexOf(idObjeto);

        if (index !== -1) {
            this.listFavorites.splice(index, 1);
            this.favorites$.next(this.listFavorites);
        }
    }

    getFavoriteIcon(idObjeto: number): string {
        return this.listFavorites.includes(idObjeto)
            ? 'assets/icons/favorited.png'
            : 'assets/icons/favorite.png';
    }
}