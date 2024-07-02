import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShampooSliderComponent } from './shampoo-slider.component';

describe('ShampooSliderComponent', () => {
  let component: ShampooSliderComponent;
  let fixture: ComponentFixture<ShampooSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShampooSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShampooSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
