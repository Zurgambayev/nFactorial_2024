import { TestBed } from '@angular/core/testing';

import { NewsSharingService } from './news-sharing.service';

describe('NewsSharingService', () => {
  let service: NewsSharingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsSharingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
