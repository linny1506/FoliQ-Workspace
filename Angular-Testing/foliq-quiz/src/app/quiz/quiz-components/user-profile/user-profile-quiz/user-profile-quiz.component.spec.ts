import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileQuizComponent } from './user-profile-quiz.component';

describe('UserProfileQuizComponent', () => {
  let component: UserProfileQuizComponent;
  let fixture: ComponentFixture<UserProfileQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserProfileQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserProfileQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
