import {
  Directive,
  Input,
  OnInit,
  HostListener,
  AfterViewInit,
  ElementRef,
} from '@angular/core';

@Directive({
  selector: '[appParallax]',
  standalone: true,
})
export class ParallaxDirective implements OnInit, AfterViewInit {
  @Input('ratio') ratio: number = 1;
  initialTop: number = 0;

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e: any) {
    this.el.nativeElement.style.top =
      this.initialTop - window.scrollY * this.ratio + 'px';
  }

  public ngOnInit(): void {
    //
  }

  public ngAfterViewInit() {
    if (this.el.nativeElement.getBoundingClientRect) {
      this.initialTop = this.el.nativeElement.getBoundingClientRect().top;
    }
  }
}
