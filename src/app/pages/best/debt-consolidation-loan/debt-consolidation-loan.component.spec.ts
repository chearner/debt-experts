import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtConsolidationLoanComponent } from './debt-consolidation-loan.component';

describe('DebtConsolidationLoanComponent', () => {
  let component: DebtConsolidationLoanComponent;
  let fixture: ComponentFixture<DebtConsolidationLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebtConsolidationLoanComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DebtConsolidationLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
