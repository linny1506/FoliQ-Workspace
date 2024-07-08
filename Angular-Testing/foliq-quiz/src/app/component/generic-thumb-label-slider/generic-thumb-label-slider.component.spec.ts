import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericThumbLabelSliderComponent } from './generic-thumb-label-slider.component';

describe('GenericThumbLabelSliderComponent', () => {
  let component: GenericThumbLabelSliderComponent;
  let fixture: ComponentFixture<GenericThumbLabelSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericThumbLabelSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenericThumbLabelSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
