import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchNoteService {
  constructor() {}

  private emitChangeSource = new Subject<any>();
  // Observable string streams
  filterNoteList = this.emitChangeSource.asObservable();
  // Service message commands
  emitChangeFilterNotes(change: string) {
    this.emitChangeSource.next(change);
  }
}
