import { Routes } from '@angular/router';
import { DebtConsolidationLoanComponent } from './pages/best/debt-consolidation-loan/debt-consolidation-loan.component';
import { HomeComponent } from './pages/home/home.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { CookiePolicyComponent } from './pages/cookie-policy/cookie-policy.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { SiteMapComponent } from './pages/site-map/site-map.component';
import { TermsOfServiceComponent } from './pages/terms-of-service/terms-of-service.component';
import { AdvertiserDisclosureComponent } from './pages/advertiser-disclosure/advertiser-disclosure.component';
import { ErrorComponent } from './pages/error/error.component';

export const routes: Routes = [
  {
    path: 'best/debt-consolidation-loan/:siteLink',
    title: 'Best Debt Consolidation Loans',
    component: DebtConsolidationLoanComponent,
  },
  {
    path: 'best/debt-consolidation-loan',
    title: 'Best Debt Consolidation Loans',
    component: DebtConsolidationLoanComponent,
  },
  { path: 'faqs', title: 'FAQs', component: FaqsComponent },
  { path: 'about-us', title: 'About Us', component: AboutUsComponent },
  {
    path: 'privacy-policy',
    title: 'Privacy Policy',
    component: PrivacyPolicyComponent,
  },
  {
    path: 'cookie-policy',
    title: 'Cookie Policy',
    component: CookiePolicyComponent,
  },
  {
    path: 'terms-of-service',
    title: 'Terms of Service',
    component: TermsOfServiceComponent,
  },
  {
    path: 'advertiser-disclosure',
    title: 'Advertiser Disclosure',
    component: AdvertiserDisclosureComponent,
  },
  { path: 'contact-us', title: 'Contact Us', component: ContactUsComponent },
  { path: 'site-map', title: 'Site Map', component: SiteMapComponent },
  { path: '', title: 'Home', component: HomeComponent },
  { path: '**', title: 'Error', component: ErrorComponent },
];
