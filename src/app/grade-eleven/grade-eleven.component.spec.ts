import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeElevenComponent } from './grade-eleven.component';

describe('GradeElevenComponent', () => {
  let component: GradeElevenComponent;
  let fixture: ComponentFixture<GradeElevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeElevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeElevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
