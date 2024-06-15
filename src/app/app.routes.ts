// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesEnum } from './enums/pages.enum';
import { FavoritosPage } from './pages/favoritos/favoritos-page';
import { InicioPage } from './pages/inicio/inicio-page';

export const routes: Routes = [
    { path: "", redirectTo: "", pathMatch: 'full' },
    { path: "", component: InicioPage },
    { path: PagesEnum.FAVORITOS, component: FavoritosPage },
    { path: '**', redirectTo: "" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }