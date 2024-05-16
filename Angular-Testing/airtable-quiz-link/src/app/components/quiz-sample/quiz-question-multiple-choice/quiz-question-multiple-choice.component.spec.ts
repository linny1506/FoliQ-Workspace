import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizQuestionMultipleChoiceComponent } from './quiz-question-multiple-choice.component';

describe('QuizQuestionMultipleChoiceComponent', () => {
  let component: QuizQuestionMultipleChoiceComponent;
  let fixture: ComponentFixture<QuizQuestionMultipleChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizQuestionMultipleChoiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuizQuestionMultipleChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
