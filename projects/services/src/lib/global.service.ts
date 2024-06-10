import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { SiteLinks } from './models/site-links';
import { SiteDetails } from './models/site-details';
import { GlobalState } from './models/global-state';
//import { Injector } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
//import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  //protected apiUrl = environment.apiUrl;
  //protected version = environment.version;

  constructor() {

  }

  public globalState: GlobalState = {
    siteName: 'Debt-Experts.org',
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
      id: 'lending-tree',
      name: 'Lending Tree',
      image: '',
      link: 'http://www.lendingtree.com',
      rating: 5,
      description: 'LendingTree is an online loan marketplace for every type of borrowing, from auto loans to credit cards and beyond. You can use this service to easily compare offers from up to five lenders at a time, helping you access the best rates and terms for your personal loan. We love the detailed information provided on each lending partner, with thousands of client reviews to help determine which one is the best choice for a personal loan. LendingTree has a great reputation and is a trustworthy option if you want to use a referral service to research and secure a loan.',
    },
    {
      id: 'national-debt-relief',
      name: 'National Debt Relief',
      image: '',
      link: 'http://www.nationaldebtrelief.com',
      rating: 4,
      description: "National Debt Relief provides customers a professional and low stress experience as well as debt consolidation options to meet their financial goals. National Debt Relief works hard to determine what debt consolidation loan option will work best for each individual customer. A high BBB rating, professional staff, and a customer satisfaction guarantee pushes National Debt Relief to the top of our list.",
    },
    {
      id: 'upstart',
      name: 'Upstart',
      image: '',
      link: 'http://www.upstart.com',
      rating: 4,
      description: "Upstart employs extensive artificial intelligence to improve access to credit and provides some unique features compared with many providers of consolidation loans. This holistic process makes it more likely that you'll be approved for your loan. Their interest rates are competitive with other lenders, and thousands of people have used this platform to get consolidation loans very quickly once approved.",
    },
    {
      id: 'accredited-debt-relief',
      name: 'Accredited Debt Relief',
      image: '',
      link: 'http://www.accrediteddebtrelief.com',
      rating: 3,
      description: 'SoFi has some big benefits compared with other options for consolidation loans: low fixed rates, and even occasional sign-up bonus money. But, an increase in the number of complaints from SoFi clients, describing negative experiences specifically with the customer service department, gave us some cause for concern.',
    },
    {
      id: 'jg-wentworth',
      name: 'JG Wentworth',
      image: '',
      link: 'http://www.jgwentworth.com',
      rating: 4,
      description: '',
    },
    {
      id: 'sofi',
      name: 'SoFi',
      image: '',
      link: 'http://www.sofi.com',
      rating: 5,
      description: "SoFi has some big benefits compared with other options for consolidation loans: low fixed rates, and even occasional sign-up bonus money. But, an increase in the number of complaints from SoFi clients, describing negative experiences specifically with the customer service department, gave us some cause for concern.",
    },
    {
      id: 'super-money',
      name: 'SuperMoney',
      image: '',
      link: 'http://www.supermoney.com',
      rating: 3,
      description: "SuperMoney offers comparison 'shopping' for many financial products, including consolidation loans. They offer funding through just over a dozen partners, and you can see detailed information and reviews about each one before filling out your application. SuperMoney hasn't been around as long as some of the referral platforms we evaluated and so there's not as much customer feedback yet. This is a good way to gather information about personal loans you might be eligible for, but you'll still have to complete your application directly with the lender you choose.",
    },
    {
      id: 'reach',
      name: 'Reach Financial',
      image: '',
      link: 'http://www.reach.com',
      rating: 4,
      description: "Reach Financial specializes in loans for the purpose of debt consolidation. The company has a great reputation, both with the BBB and its clients. We wish they were a little more forthcoming about what a prospective borrower can expect, especially with regards to loan amounts, terms, and APR's. Still, we see bright things ahead for this relative newcomer.",
    },
    {
      id: 'cura-debt',
      name: 'CuraDebt',
      image: '',
      link: 'http://www.curadebt.com',
      rating: 3,
      description: "For over 25 years, CuraDebt has helped people get on top of what they owe through debt consolidation and other proven strategies. You only pay fees when your debts are handled, and you'll still save a lot of money. The initial consultation is complimentary. While this is still one of our favorite resources for trustworthy debt consolidation, there are 16 states where residents will not be eligible for CuraDebt's services.",
    },
    {
      id: 'credit-org',
      name: 'Credit.org',
      image: '',
      link: 'http://www.credit.org',
      rating: 4,
      description: 'Credit.org is a non-profit service with a 45-year plus history of excellence and integrity. Best of all, their financial coaching is available at absolutely no charge. It is important to understand how Credit.org is different than other companies in the space. Credit.org provides an entirely free personal financial review along with an action plan that empowers you to make smarter decisions about your options to become debt free. Additionally, they can help you with your debt through personalized plans.',
    },
  ];
}
