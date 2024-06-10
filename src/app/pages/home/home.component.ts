import {
  Component,
  OnInit,
  AfterViewInit,
  Inject,
  ViewChild,
  ElementRef,
  Renderer2,
  HostListener
} from '@angular/core';
import { CommonModule, formatDate, DOCUMENT } from '@angular/common';
import { GlobalService } from '../../../../projects/services/src/lib/global.service';
import { ParallaxDirective } from '../../directives/parallax.directive';
import { TagModule } from 'primeng/tag';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { ReviewComponent } from '../../components/review/review.component';
import { TipComponent } from '../../components/tip/tip.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ParallaxDirective,
    TagModule,
    BadgeModule,
    ButtonModule,
    DividerModule,
    ReviewComponent,
    TipComponent,
  ],
  providers: [GlobalService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, AfterViewInit {
  dateYear = formatDate(new Date(), 'yyyy', 'en');
  waveWidth: number = 10;
  waveCount: number = 40;
  docFrag: any = null;
  ocean: any = null;

  constructor(
    public globalService: GlobalService,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  @HostListener('window:resize', ['$event.target.innerWidth']) onResize(width: number) {
    this.ocean = this.document.getElementById('ocean');
    if (this.ocean) {
        this.waveCount = Math.floor(
          width / this.waveWidth
        ) + 1;
        let docFrag = this.document.createDocumentFragment();
        for (var i = 0; i < this.waveCount; i++) {
          var wave = this.document.createElement('div');
          wave.className += 'wave';
          docFrag.appendChild(wave);
          wave.style.left = i * this.waveWidth + 'px';
          wave.style.animationDelay = i / 100 + 's';
        }
        this.ocean.appendChild(docFrag);
    }
  }

  ngOnInit(): void {
    //
  }

  ngAfterViewInit(): void {
    //
  }
}
