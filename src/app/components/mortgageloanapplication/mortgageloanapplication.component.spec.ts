import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageloanapplicationComponent } from './mortgageloanapplication.component';

describe('MortgageloanapplicationComponent', () => {
  let component: MortgageloanapplicationComponent;
  let fixture: ComponentFixture<MortgageloanapplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MortgageloanapplicationComponent]
    });
    fixture = TestBed.createComponent(MortgageloanapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
