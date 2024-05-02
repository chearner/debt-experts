import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { formatDate } from '@angular/common';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { MenuComponent } from './pages/menu/menu.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { PrimeNGConfig } from 'primeng/api';
import { GlobalService } from './services/global.service';
import { DividerModule } from 'primeng/divider';
import { ParallaxDirective } from './directives/parallax.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    CommonModule,
    DividerModule,
    BreadcrumbModule,
    ParallaxDirective
  ],
  providers: [GlobalService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  pageTitle: string = 'zzzzzz';
  dateYear: string = formatDate(new Date(), 'yyyy', 'en');
  breadcrumb: any = {
    current: [{ label: 'Debt Experts' }],
    home: { routerLink: '/' },
  };

  constructor(
    private primeNGConfig: PrimeNGConfig,
    public globalService: GlobalService
  ) {}

  ngOnInit() {}
}
