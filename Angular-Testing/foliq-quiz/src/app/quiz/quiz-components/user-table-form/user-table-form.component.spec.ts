import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTableFormComponent } from './user-table-form.component';

describe('UserTableFormComponent', () => {
  let component: UserTableFormComponent;
  let fixture: ComponentFixture<UserTableFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserTableFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserTableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
