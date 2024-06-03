import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumidityEffectComponent } from './humidity-effect.component';

describe('HumidityEffectComponent', () => {
  let component: HumidityEffectComponent;
  let fixture: ComponentFixture<HumidityEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HumidityEffectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HumidityEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
