import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "./services/api.service";
export abstract class AppAbstracts {
    protected _apiService = inject(ApiService);

    protected _router = inject(Router);
}