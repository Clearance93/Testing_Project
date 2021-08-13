import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeNineComponent } from './grade-nine.component';

describe('GradeNineComponent', () => {
  let component: GradeNineComponent;
  let fixture: ComponentFixture<GradeNineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeNineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
