import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonachartComponent } from './donachart.component';

describe('DonachartComponent', () => {
  let component: DonachartComponent;
  let fixture: ComponentFixture<DonachartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonachartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonachartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
