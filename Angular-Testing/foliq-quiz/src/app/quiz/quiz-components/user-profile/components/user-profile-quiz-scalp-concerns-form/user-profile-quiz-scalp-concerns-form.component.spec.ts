import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileQuizScalpConcernsFormComponent } from './user-profile-quiz-scalp-concerns-form.component';

describe('UserProfileQuizScalpConcernsFormComponent', () => {
  let component: UserProfileQuizScalpConcernsFormComponent;
  let fixture: ComponentFixture<UserProfileQuizScalpConcernsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserProfileQuizScalpConcernsFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserProfileQuizScalpConcernsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
