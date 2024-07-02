import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostWashComponent } from './post-wash.component';

describe('PostWashComponent', () => {
  let component: PostWashComponent;
  let fixture: ComponentFixture<PostWashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostWashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostWashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
