import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppAbstracts } from '../../app.abstracts';
import { PagesEnum } from '../../enums/pages.enum';

@Component({
  selector: 'fcm-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html'
})
export class HeaderComponent extends AppAbstracts {
  protected favoriteAmount: number = 0;
  protected page: PagesEnum = PagesEnum.INICIO;
  protected PagesEnum = PagesEnum;

  ngOnInit(): void {
    this.getFavorite();
  }

  private getFavorite(): void {
    this._subSink.sink = this._favoriteService.favorites$.subscribe(dados => {
      this.favoriteAmount = dados.length;
    });
  }

  protected selectePage(page: PagesEnum): void {
    this.page = page;
    this._router.navigate([`/${page}`]);
  }

  get pageSelected(): PagesEnum {
    return this._location.path() === '/favoritos'
      ? PagesEnum.FAVORITOS
      : PagesEnum.INICIO
  }
}
