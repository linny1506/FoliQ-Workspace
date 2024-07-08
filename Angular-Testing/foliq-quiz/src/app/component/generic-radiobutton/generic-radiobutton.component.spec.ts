import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericRadiobuttonComponent } from './generic-radiobutton.component';

describe('GenericRadiobuttonComponent', () => {
  let component: GenericRadiobuttonComponent;
  let fixture: ComponentFixture<GenericRadiobuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericRadiobuttonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenericRadiobuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
