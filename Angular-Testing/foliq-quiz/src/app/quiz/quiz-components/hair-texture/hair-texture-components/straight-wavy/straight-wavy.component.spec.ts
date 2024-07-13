import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StraightWavyComponent } from './straight-wavy.component';

describe('StraightWavyComponent', () => {
  let component: StraightWavyComponent;
  let fixture: ComponentFixture<StraightWavyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StraightWavyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StraightWavyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
