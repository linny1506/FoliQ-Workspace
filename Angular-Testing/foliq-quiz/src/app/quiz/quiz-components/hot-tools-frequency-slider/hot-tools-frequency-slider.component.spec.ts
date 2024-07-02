import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotToolsFrequencySliderComponent } from './hot-tools-frequency-slider.component';

describe('HotToolsFrequencySliderComponent', () => {
  let component: HotToolsFrequencySliderComponent;
  let fixture: ComponentFixture<HotToolsFrequencySliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotToolsFrequencySliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HotToolsFrequencySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
