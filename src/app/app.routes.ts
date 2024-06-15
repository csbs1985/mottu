// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesEnum } from './enums/pages.enum';

export const routes: Routes = [
    { path: "", redirectTo: "", pathMatch: 'full' },
    { path: "", loadComponent: () => import('./pages/inicio/inicio-page').then(m => m.InicioPage) },
    { path: PagesEnum.FAVORITOS, loadComponent: () => import('./pages/favoritos/favoritos-page').then(m => m.FavoritosPage) },
    { path: '**', redirectTo: "" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }