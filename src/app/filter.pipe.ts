import { Pipe, PipeTransform } from '@angular/core';
import { NotePadComponent } from './components/note-pad/note-pad.component';

@Pipe({ name: 'filterNotes' })
export class FilterPipe implements PipeTransform {
  /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param items list of elements to search in
   * @param searchText search string
   * @returns list of elements filtered by search text or []
   */

  transform(notes: any[], filterText: string): any[] {
    if (!notes) {
      return [];
    }
    if (!filterText) {
      return notes;
    }
    filterText = filterText.toLocaleLowerCase();

    return notes.filter((it) => {
      if (it.noteTitle.toLocaleLowerCase().includes(filterText)) {
        return it;
      }
    });
  }
}
