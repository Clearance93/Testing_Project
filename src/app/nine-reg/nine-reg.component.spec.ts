import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NineRegComponent } from './nine-reg.component';

describe('NineRegComponent', () => {
  let component: NineRegComponent;
  let fixture: ComponentFixture<NineRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NineRegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NineRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
