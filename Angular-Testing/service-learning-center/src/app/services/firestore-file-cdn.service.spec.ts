import { TestBed } from '@angular/core/testing';

import { FirestoreFileCdnService } from './firestore-file-cdn.service';

describe('FirestoreFileCdnService', () => {
  let service: FirestoreFileCdnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirestoreFileCdnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
