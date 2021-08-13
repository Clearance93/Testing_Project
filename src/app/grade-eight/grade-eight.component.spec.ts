import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeEightComponent } from './grade-eight.component';

describe('GradeEightComponent', () => {
  let component: GradeEightComponent;
  let fixture: ComponentFixture<GradeEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ GradeEightComponent ],
      providers: [
        {
          provide: GradeEightComponent,
          useCall: GradeEightComponent
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
