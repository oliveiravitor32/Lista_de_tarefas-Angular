import { Injectable } from '@angular/core';

import { Note } from '../Interfaces/Note';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  notes: Note[] = [
    {
      id: 0,
      noteTitle: 'Exemple title',
      noteDescription: 'Exemple description',
      noteText: 'Example text',
    },
  ];
  constructor() {}

  getAllNotes(): Note[] {
    return this.notes;
  }
  getNote(id: any): Note {
    let noteReturn: Note;
    this.notes.map((note) => {
      note.id == id ? (noteReturn = note) : '';
    });

    return noteReturn!;
  }
  createNote(note: Note) {
    note.id = Date.now().toString(36) + Math.random().toString(36).substr(2);
    note.noteText = '';
    this.notes.push(note);
  }
  deleteNote(note: Note): Note[] {
    let updatedNotes: Note[] = [];
    this.notes.filter((noteMap) => {
      noteMap.id != note.id ? updatedNotes.push(noteMap) : '';
    });
    this.notes = updatedNotes;
    return this.notes;
  }
  renameNote(
    note: Note,
    formValue: { noteTitle: string; noteDescription: string }
  ): void {
    let updatedNote = note;
    updatedNote['noteTitle'] = formValue.noteTitle;
    updatedNote['noteDescription'] = formValue.noteDescription;

    this.notes.filter((noteMap) => {
      noteMap.id === updatedNote.id ? (noteMap = updatedNote) : '';
    });
  }
  setText(updatedNote: Note) {
    this.notes.filter((noteMap) => {
      noteMap.id === updatedNote.id ? (noteMap = updatedNote) : '';
    });
  }

  private emitChangeSource = new Subject<any>();
  // Observable string streams
  changeHeader = this.emitChangeSource.asObservable();
  // Service message commands
  emitChangeHeader(change: boolean) {
    this.emitChangeSource.next(change);
  }
}
