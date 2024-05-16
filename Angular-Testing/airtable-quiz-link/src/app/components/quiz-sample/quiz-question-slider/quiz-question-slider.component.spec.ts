import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizQuestionSliderComponent } from './quiz-question-slider.component';

describe('QuizQuestionSliderComponent', () => {
  let component: QuizQuestionSliderComponent;
  let fixture: ComponentFixture<QuizQuestionSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizQuestionSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuizQuestionSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
