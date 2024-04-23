import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertiserDisclosureComponent } from './advertiser-disclosure.component';

describe('AdDisclosureComponent', () => {
  let component: AdvertiserDisclosureComponent;
  let fixture: ComponentFixture<AdvertiserDisclosureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvertiserDisclosureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdvertiserDisclosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
