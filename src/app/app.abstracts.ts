import { inject } from "@angular/core";
import { Router } from "@angular/router";
export abstract class AppAbstracts {
    protected _router = inject(Router);
}