import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemicallyProcessedSliderComponent } from './chemically-processed-slider.component';

describe('ChemicallyProcessedSliderComponent', () => {
  let component: ChemicallyProcessedSliderComponent;
  let fixture: ComponentFixture<ChemicallyProcessedSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChemicallyProcessedSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChemicallyProcessedSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
