import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditordetxtComponent } from './editordetxt.component';

describe('EditordetxtComponent', () => {
  let component: EditordetxtComponent;
  let fixture: ComponentFixture<EditordetxtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditordetxtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditordetxtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
