import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { formatDate } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { PrimeNGConfig } from 'primeng/api';
import { DividerModule } from 'primeng/divider';
import { ParallaxDirective } from './directives/parallax.directive';
import { GlobalService } from '@services';
import { environment } from '../environments/environment';

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
  dateYear: string = formatDate(new Date(), 'yyyy', 'en');
  breadcrumb: any = {
    current: [{ label: 'Debt Experts' }],
    home: { routerLink: '/' },
  };

  constructor(
    private primeNGConfig: PrimeNGConfig,
    public globalService: GlobalService
  ) {}

  ngOnInit() {
    
  }
}
