import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizQuestionFileComponent } from './quiz-question-file.component';

describe('QuizQuestionFileComponent', () => {
  let component: QuizQuestionFileComponent;
  let fixture: ComponentFixture<QuizQuestionFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizQuestionFileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuizQuestionFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
