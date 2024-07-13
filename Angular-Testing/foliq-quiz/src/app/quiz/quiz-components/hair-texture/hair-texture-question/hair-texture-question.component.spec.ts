import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairTextureQuestionComponent } from './hair-texture-question.component';

describe('HairTextureQuestionComponent', () => {
  let component: HairTextureQuestionComponent;
  let fixture: ComponentFixture<HairTextureQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HairTextureQuestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HairTextureQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
