import { Component, OnInit, Input } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { GlobalService } from '../../../services/global.service';
import { SiteLinks } from '../../../models/site-links';

@Component({
  selector: 'app-debt-consolidation-loan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './debt-consolidation-loan.component.html',
  styleUrl: './debt-consolidation-loan.component.scss',
})
export class DebtConsolidationLoanComponent implements OnInit {
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
