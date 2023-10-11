import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindahomeComponent } from './findahome.component';

describe('FindahomeComponent', () => {
  let component: FindahomeComponent;
  let fixture: ComponentFixture<FindahomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindahomeComponent]
    });
    fixture = TestBed.createComponent(FindahomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
