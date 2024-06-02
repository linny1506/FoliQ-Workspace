import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScalpConcernsFormComponent } from './scalp-concerns-form.component';

describe('ScalpConcernsFormComponent', () => {
  let component: ScalpConcernsFormComponent;
  let fixture: ComponentFixture<ScalpConcernsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScalpConcernsFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScalpConcernsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
