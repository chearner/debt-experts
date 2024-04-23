import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-advertiser-disclosure',
  standalone: true,
  imports: [],
  templateUrl: './advertiser-disclosure.component.html',
  styleUrl: './advertiser-disclosure.component.scss',
})
export class AdvertiserDisclosureComponent {
  constructor(public globalService: GlobalService) {}
}
