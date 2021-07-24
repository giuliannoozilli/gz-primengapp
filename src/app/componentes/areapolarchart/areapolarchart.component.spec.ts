import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreapolarchartComponent } from './areapolarchart.component';

describe('AreapolarchartComponent', () => {
  let component: AreapolarchartComponent;
  let fixture: ComponentFixture<AreapolarchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreapolarchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreapolarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
