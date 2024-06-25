import { TestBed } from '@angular/core/testing';

import { AirtableFileUploadService } from './airtable-file-upload.service';

describe('AirtableFileUploadService', () => {
  let service: AirtableFileUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirtableFileUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
