import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtSettlementServiceComponent } from './debt-settlement-service.component';

describe('DebtSettlementServiceComponent', () => {
  let component: DebtSettlementServiceComponent;
  let fixture: ComponentFixture<DebtSettlementServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebtSettlementServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DebtSettlementServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
