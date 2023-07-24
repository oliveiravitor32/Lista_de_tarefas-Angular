import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

import { NotesService } from 'src/app/services/notes.service';
import { Note } from 'src/app/Interfaces/Note';

@Component({
  selector: 'app-dialog-rename-note',
  templateUrl: './dialog-rename-note.component.html',
  styleUrls: ['./dialog-rename-note.component.css'],
})
export class DialogRenameNoteComponent {
  public renameNoteForm!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Note,
    private notesService: NotesService,
    public form: FormBuilder,
    public dialogRef: MatDialogRef<DialogRenameNoteComponent>
  ) {}

  ngOnInit(): void {
    this.renameNoteForm = this.form.group({
      noteTitle: ['', [Validators.required]],
      noteDescription: ['', [Validators.required]],
    });
  }

  renameNote() {
    this.notesService.renameNote(this.data, this.renameNoteForm.value);
    this.renameNoteForm.reset();
    this.dialogRef.close();
  }
}
