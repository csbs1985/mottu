import { Injectable, OnDestroy, inject } from "@angular/core";
import { Router } from "@angular/router";
import { SubSink } from "subsink";
import { ApiService } from "./services/api.service";
import { FavoriteService } from "./services/favorite.service";

@Injectable()
export abstract class AppAbstracts implements OnDestroy {
    protected _apiService = inject(ApiService);
    protected _favoriteService = inject(FavoriteService);

    protected _router = inject(Router);

    protected _subSink = new SubSink();

    ngOnDestroy(): void {
        this._subSink.unsubscribe();
    }
}