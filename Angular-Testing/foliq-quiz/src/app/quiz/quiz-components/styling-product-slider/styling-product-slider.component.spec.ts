import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylingProductSliderComponent } from './styling-product-slider.component';

describe('StylingProductSliderComponent', () => {
  let component: StylingProductSliderComponent;
  let fixture: ComponentFixture<StylingProductSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StylingProductSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StylingProductSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
