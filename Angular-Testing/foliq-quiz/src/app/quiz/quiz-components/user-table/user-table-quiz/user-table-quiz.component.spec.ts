import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTableQuizComponent } from './user-table-quiz.component';

describe('UserTableQuizComponent', () => {
  let component: UserTableQuizComponent;
  let fixture: ComponentFixture<UserTableQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserTableQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserTableQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
