import { TestBed } from '@angular/core/testing';

import { SearchNoteService } from './search-note.service';

describe('SearchNoteService', () => {
  let service: SearchNoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchNoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
