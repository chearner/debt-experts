import { Component } from '@angular/core';
import { GlobalService } from '../../../../projects/services/src/lib/global.service';

@Component({
  selector: 'app-site-map',
  standalone: true,
  imports: [],
  templateUrl: './site-map.component.html',
  styleUrl: './site-map.component.scss',
})
export class SiteMapComponent {
  constructor(public globalService: GlobalService) {}
}
