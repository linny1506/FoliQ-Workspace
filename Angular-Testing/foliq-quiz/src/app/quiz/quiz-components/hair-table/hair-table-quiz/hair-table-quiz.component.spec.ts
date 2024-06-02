import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairTableQuizComponent } from './hair-table-quiz.component';

describe('HairTableQuizComponent', () => {
  let component: HairTableQuizComponent;
  let fixture: ComponentFixture<HairTableQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HairTableQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HairTableQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
