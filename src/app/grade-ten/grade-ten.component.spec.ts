import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeTenComponent } from './grade-ten.component';

describe('GradeTenComponent', () => {
  let component: GradeTenComponent;
  let fixture: ComponentFixture<GradeTenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeTenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
