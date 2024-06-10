import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: 'best/debt-consolidation-loan/:siteLink',
    title: 'Best Debt Consolidation Loans',
    loadComponent: () =>
      import(
        './pages/best/debt-consolidation-loan/debt-consolidation-loan.component'
      ).then((m) => m.DebtConsolidationLoanComponent),
  },
  {
    path: 'best/debt-consolidation-loan',
    title: 'Best Debt Consolidation Loans',
    loadComponent: () =>
      import(
        './pages/best/debt-consolidation-loan/debt-consolidation-loan.component'
      ).then((m) => m.DebtConsolidationLoanComponent),
  },
  {
    path: 'best/debt-settlement-service',
    title: 'Best Debt Settlement Services',
    loadComponent: () =>
      import(
        './pages/best/debt-settlement-service/debt-settlement-service.component'
      ).then((m) => m.DebtSettlementServiceComponent),
  },
  {
    path: 'best/debt-management-program',
    title: 'Best Debt Management Program',
    loadComponent: () =>
      import(
        './pages/best/debt-management-program/debt-management-program.component'
      ).then((m) => m.DebtManagementProgramComponent),
  },
  {
    path: 'faqs',
    title: 'FAQs',
    loadComponent: () =>
      import('./pages/faqs/faqs.component').then((m) => m.FaqsComponent),
  },
  {
    path: 'about-us',
    title: 'About Us',
    loadComponent: () =>
      import('./pages/about-us/about-us.component').then(
        (m) => m.AboutUsComponent
      ),
  },
  {
    path: 'privacy-policy',
    title: 'Privacy Policy',
    loadComponent: () =>
      import('./pages/privacy-policy/privacy-policy.component').then(
        (m) => m.PrivacyPolicyComponent
      ),
  },
  {
    path: 'cookie-policy',
    title: 'Cookie Policy',
    loadComponent: () =>
      import('./pages/cookie-policy/cookie-policy.component').then(
        (m) => m.CookiePolicyComponent
      ),
  },
  {
    path: 'terms-of-service',
    title: 'Terms of Service',
    loadComponent: () =>
      import('./pages/terms-of-service/terms-of-service.component').then(
        (m) => m.TermsOfServiceComponent
      ),
  },
  {
    path: 'advertiser-disclosure',
    title: 'Advertiser Disclosure',
    loadComponent: () =>
      import(
        './pages/advertiser-disclosure/advertiser-disclosure.component'
      ).then((m) => m.AdvertiserDisclosureComponent),
  },
  {
    path: 'contact-us',
    title: 'Contact Us',
    loadComponent: () =>
      import('./pages/contact-us/contact-us.component').then(
        (m) => m.ContactUsComponent
      ),
  },
  {
    path: 'site-map',
    title: 'Site Map',
    loadComponent: () =>
      import('./pages/site-map/site-map.component').then(
        (m) => m.SiteMapComponent
      ),
  },
  { path: '', title: 'Home', component: HomeComponent },
  {
    path: 'admin',
    title: 'Admin',
    loadComponent: () =>
      import('@admin').then(
        (m) => m.AdminComponent
      ),
  },
  {
    path: '**',
    title: 'Error',
    loadComponent: () =>
      import('./pages/error/error.component').then((m) => m.ErrorComponent),
  },
];
