import { Component, OnInit } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { GlobalService } from '../../services/global.service';
import { ParallaxDirective } from '../../directives/parallax.directive';
import { TagModule } from 'primeng/tag';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ParallaxDirective, TagModule, BadgeModule, ButtonModule, DividerModule],
  providers: [GlobalService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  dateYear = formatDate(new Date(), 'yyyy', 'en');
  
  constructor(public globalService: GlobalService) {}

  ngOnInit() {
    //console.log('asdfsa')
    //let text = document.getElementById('text');

    //text!.style.color = 'green';

    //window.addEventListener('scroll', function(){
      //var value = this.window.scrollY;
      //text!.style.top = value * .9 + 'px';
    //})
  }
}
