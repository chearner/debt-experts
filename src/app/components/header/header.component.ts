import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { TabMenuModule } from 'primeng/tabmenu';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import {
  FormsModule,
  FormGroup,
  FormControl,
  FormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { GlobalService } from '../../../../projects/services/src/lib/global.service';
import { SiteLinks } from '../../models/site-links';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    DropdownModule,
    TabMenuModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MenuModule,
    ButtonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  selectedSiteLink: SiteLinks | undefined;
  selectSiteForm: FormGroup = new FormGroup({
    selectLoanType: new FormControl(''),
  });
  siteLinks: SiteLinks[] | undefined;

  constructor(private fb: FormBuilder, public globalService: GlobalService) {}

  // @Input({ required: false }) pageTitle: string = '';

  ngOnInit() {
    this.siteLinks = this.globalService.siteLinks.map((o) => ({
      ...o,
      label: o.label + 's',
    }));
    //this.selectLoanForm.valueChanges.subscribe((data) => {
    //  this.selectedLoanType = data['selectLoanType'];
    //});
  }
}
