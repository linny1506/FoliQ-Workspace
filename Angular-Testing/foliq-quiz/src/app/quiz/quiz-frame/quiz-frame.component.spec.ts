import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizFrameComponent } from './quiz-frame.component';

describe('QuizFrameComponent', () => {
  let component: QuizFrameComponent;
  let fixture: ComponentFixture<QuizFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizFrameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuizFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
