import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizQuestionTextfieldComponent } from './quiz-question-textfield.component';

describe('QuizQuestionTextfieldComponent', () => {
  let component: QuizQuestionTextfieldComponent;
  let fixture: ComponentFixture<QuizQuestionTextfieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizQuestionTextfieldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuizQuestionTextfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
