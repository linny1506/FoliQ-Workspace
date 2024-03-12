import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFormTemplateComponent } from './test-form-template.component';

describe('TestFormTemplateComponent', () => {
  let component: TestFormTemplateComponent;
  let fixture: ComponentFixture<TestFormTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestFormTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestFormTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
