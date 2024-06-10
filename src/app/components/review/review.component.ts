import { Component, Input, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SiteDetails } from '../../models/site-details';
import { RatingModule } from 'primeng/rating';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [ButtonModule, RatingModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss',
})
export class ReviewComponent implements OnInit {
  @Input() site: SiteDetails;
  rating: number = 0;

  ngOnInit(): void {}
}
