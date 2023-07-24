import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-dialog-create-note',
  templateUrl: './dialog-create-note.component.html',
  styleUrls: ['./dialog-create-note.component.css'],
})
export class DialogCreateNoteComponent implements OnInit {
  public noteForm!: FormGroup;

  constructor(
    private notesService: NotesService,
    public form: FormBuilder,
    public dialogRef: MatDialogRef<DialogCreateNoteComponent>
  ) {}

  ngOnInit(): void {
    this.noteForm = this.form.group({
      noteTitle: ['', [Validators.required]],
      noteDescription: ['', [Validators.required]],
    });
  }

  cancel(): void {
    this.dialogRef.close();
    this.noteForm.reset();
  }
  createNote(): void {
    this.notesService.createNote(this.noteForm.value);
    this.noteForm.reset();
    this.dialogRef.close();
  }
}
