import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindhomesearchzipcodeComponent } from './findhomesearchzipcode.component';

describe('FindhomesearchzipcodeComponent', () => {
  let component: FindhomesearchzipcodeComponent;
  let fixture: ComponentFixture<FindhomesearchzipcodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindhomesearchzipcodeComponent]
    });
    fixture = TestBed.createComponent(FindhomesearchzipcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
