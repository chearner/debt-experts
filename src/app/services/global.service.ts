import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SiteLinks } from '../models/site-links';
import { SiteDetails } from '../models/site-details';
import { GlobalState } from '../models/global-state';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  public globalState: GlobalState = {
    siteNameDotCom: 'DebtExperts.org',
    siteName: 'Debt Experts',
  };

  // student loans, debt-consolidation loans, home improvement loans, home equity loans, small business loans, mortage loans, auto loans

  public siteLinks: SiteLinks[] = [
    {
      id: 'debt-consolidation-loan',
      label: 'Debt Consolidation Loan',
      routerLink: ['/best/debt-consolidation-loan'],
    },
    {
      id: 'debt-negotiation',
      label: 'Debt Management Program',
      routerLink: ['/best/debt-management-program/'],
    },
    {
      id: 'debt-settlement',
      label: 'Debt Settlement Service',
      routerLink: ['/best/debt-settlement/'],
    },
  ];

  public siteDetails: SiteDetails[] = [
    {
      id: 'debt-consolidation-loan',
      name: 'Freedom Financial Network',
      image: '',
      link: '',
      rating: 0,
      description: '',
    },
    {
      id: 'debt-consolidation-loan',
      name: 'National Debt Relief',
      image: '',
      link: '',
      rating: 0,
      description: '',
    },
    {
      id: 'debt-consolidation-loan',
      name: 'Accredited Debt Relief',
      image: '',
      link: '',
      rating: 0,
      description: '',
    },
    {
      id: 'debt-consolidation-loan',
      name: 'JG Wentworth',
      image: '',
      link: '',
      rating: 0,
      description: '',
    },
    {
      id: 'mortgage-loan',
      name: 'Guardian Debt Relief',
      image: '',
      link: '',
      rating: 0,
      description: '',
    },
    {
      id: 'auto-loan',
      name: 'New Era Debt Solutions',
      image: '',
      link: '',
      rating: 0,
      description: '',
    },
    {
      id: 'auto-loan',
      name: 'Debt Consolidation Care',
      image: '',
      link: '',
      rating: 0,
      description: '',
    },
    {
      id: 'auto-loan',
      name: 'CuraDebt',
      image: '',
      link: '',
      rating: 0,
      description: '',
    },
    {
      id: 'auto-loan',
      name: 'Debt Alternative Center',
      image: '',
      link: '',
      rating: 0,
      description: '',
    },
  ];
}
