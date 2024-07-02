import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExersizeFrequencySliderComponent } from './exersize-frequency-slider.component';

describe('ExersizeFrequencySliderComponent', () => {
  let component: ExersizeFrequencySliderComponent;
  let fixture: ComponentFixture<ExersizeFrequencySliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExersizeFrequencySliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExersizeFrequencySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
