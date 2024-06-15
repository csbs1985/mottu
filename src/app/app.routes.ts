// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesEnum } from './enums/pages.enum';
import { FavoritosPageComponent } from './pages/favoritos/favoritos-page';
import { InicioPageComponent } from './pages/inicio/inicio-page';

export const routes: Routes = [
    { path: '', redirectTo: PagesEnum.INICIO, pathMatch: 'full' },
    { path: PagesEnum.INICIO, component: InicioPageComponent },
    { path: PagesEnum.FAVORITOS, component: FavoritosPageComponent },
    { path: '**', redirectTo: PagesEnum.INICIO }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }