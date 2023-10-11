import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoancalculatorComponent } from './loancalculator.component';

describe('LoancalculatorComponent', () => {
  let component: LoancalculatorComponent;
  let fixture: ComponentFixture<LoancalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoancalculatorComponent]
    });
    fixture = TestBed.createComponent(LoancalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
