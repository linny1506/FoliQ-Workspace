import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductQuantitySliderComponent } from './product-quantity-slider.component';

describe('ProductQuantitySliderComponent', () => {
  let component: ProductQuantitySliderComponent;
  let fixture: ComponentFixture<ProductQuantitySliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductQuantitySliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductQuantitySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
