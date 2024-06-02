import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileQuizHairConcernsFormComponent } from './user-profile-quiz-hair-concerns-form.component';

describe('UserProfileQuizHairConcernsFormComponent', () => {
  let component: UserProfileQuizHairConcernsFormComponent;
  let fixture: ComponentFixture<UserProfileQuizHairConcernsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserProfileQuizHairConcernsFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserProfileQuizHairConcernsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
