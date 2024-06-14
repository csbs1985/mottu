import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "./services/api.service";
import { FavoriteService } from "./services/favorite.service";
export abstract class AppAbstracts {
    protected _apiService = inject(ApiService);
    protected _favoriteService = inject(FavoriteService);

    protected _router = inject(Router);
}