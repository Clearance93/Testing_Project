import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeTwelveComponent } from './grade-twelve.component';

describe('GradeTwelveComponent', () => {
  let component: GradeTwelveComponent;
  let fixture: ComponentFixture<GradeTwelveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeTwelveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeTwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
