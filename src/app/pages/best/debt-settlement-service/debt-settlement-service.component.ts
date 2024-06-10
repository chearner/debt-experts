import { Component, OnInit, Input } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { GlobalService } from '../../../../../projects/services/src/lib/global.service';
import { SiteLinks } from '../../../models/site-links';

@Component({
  selector: 'app-debt-settlement-service',
  standalone: true,
  imports: [],
  templateUrl: './debt-settlement-service.component.html',
  styleUrl: './debt-settlement-service.component.scss'
})
export class DebtSettlementServiceComponent {
  dateMonth = formatDate(new Date(), 'MMMM', 'en');
  dateYear = formatDate(new Date(), 'YYYY', 'en');
  siteLink: any = '';

  constructor(
    private route: ActivatedRoute,
    public globalService: GlobalService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      console.log(params.get('siteLink'));
      this.siteLink = params.get('siteLink');
    });
  }
}