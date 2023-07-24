import { Component, OnInit } from '@angular/core';

import { NotesService } from 'src/app/services/notes.service';
import { Note } from 'src/app/Interfaces/Note';
import { SearchNoteService } from 'src/app/services/search-note.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogRenameNoteComponent } from '../dialog-rename-note/dialog-rename-note.component';

@Component({
  selector: 'app-note-pad',
  templateUrl: './note-pad.component.html',
  styleUrls: ['./note-pad.component.css'],
})
export class NotePadComponent implements OnInit {
  notes: Note[] = [];

  filterText: string = '';

  constructor(
    private notesService: NotesService,
    private searchNoteService: SearchNoteService,
    public dialog: MatDialog
  ) {
    searchNoteService.filterNoteList.subscribe((text) => {
      this.filterText = text;
    });
  }

  ngOnInit(): void {
    this.notes = this.notesService.getAllNotes();
  }

  handleGoToNote() {
    this.notesService.emitChangeHeader(false);
  }
  handleDeleteNote(note: Note) {
    this.notes = this.notesService.deleteNote(note);
  }
  handleRenameNote(note: Note) {
    const dialogRef = this.dialog.open(DialogRenameNoteComponent, {
      width: 'auto',
      height: 'auto',
      data: note,
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }
}
