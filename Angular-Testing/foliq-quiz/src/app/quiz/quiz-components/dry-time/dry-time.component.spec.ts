import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DryTimeComponent } from './dry-time.component';

describe('DryTimeComponent', () => {
  let component: DryTimeComponent;
  let fixture: ComponentFixture<DryTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DryTimeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DryTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
