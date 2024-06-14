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
  protected favoritesAmount: number = 0;

  protected pageSelected: PagesEnum = PagesEnum.INICIO;
  
  protected PagesEnum = PagesEnum;

  protected selectePage(page: PagesEnum): void {
    this.pageSelected = page;
    this._router.navigate([`/${page}`]);
  }
}
