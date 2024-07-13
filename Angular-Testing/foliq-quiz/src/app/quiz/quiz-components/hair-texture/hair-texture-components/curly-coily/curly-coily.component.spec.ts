import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurlyCoilyComponent } from './curly-coily.component';

describe('CurlyCoilyComponent', () => {
  let component: CurlyCoilyComponent;
  let fixture: ComponentFixture<CurlyCoilyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurlyCoilyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurlyCoilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
