import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairConcernsFormComponent } from './hair-concerns-form.component';

describe('HairConcernsFormComponent', () => {
  let component: HairConcernsFormComponent;
  let fixture: ComponentFixture<HairConcernsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HairConcernsFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HairConcernsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
