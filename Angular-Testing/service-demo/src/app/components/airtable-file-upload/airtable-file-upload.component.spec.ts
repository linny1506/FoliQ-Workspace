import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirtableFileUploadComponent } from './airtable-file-upload.component';

describe('AirtableFileUploadComponent', () => {
  let component: AirtableFileUploadComponent;
  let fixture: ComponentFixture<AirtableFileUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirtableFileUploadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirtableFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
