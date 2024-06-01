import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtManagementProgramComponent } from './debt-management-program.component';

describe('DebtManagementProgramComponent', () => {
  let component: DebtManagementProgramComponent;
  let fixture: ComponentFixture<DebtManagementProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebtManagementProgramComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DebtManagementProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
