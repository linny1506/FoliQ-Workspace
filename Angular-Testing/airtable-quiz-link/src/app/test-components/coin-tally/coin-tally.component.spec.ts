import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinTallyComponent } from './coin-tally.component';

describe('CoinTallyComponent', () => {
  let component: CoinTallyComponent;
  let fixture: ComponentFixture<CoinTallyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoinTallyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoinTallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
