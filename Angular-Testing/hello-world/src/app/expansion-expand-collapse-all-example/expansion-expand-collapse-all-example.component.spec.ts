import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionExpandCollapseAllExampleComponent } from './expansion-expand-collapse-all-example.component';

describe('ExpansionExpandCollapseAllExampleComponent', () => {
  let component: ExpansionExpandCollapseAllExampleComponent;
  let fixture: ComponentFixture<ExpansionExpandCollapseAllExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpansionExpandCollapseAllExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpansionExpandCollapseAllExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
