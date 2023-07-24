import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/Interfaces/Note';

import { ActivatedRoute } from '@angular/router';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-text-note',
  templateUrl: './text-note.component.html',
  styleUrls: ['./text-note.component.css'],
})
export class TextNoteComponent implements OnInit {
  textNote!: Note;
  text!: string;

  constructor(
    private notesService: NotesService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.getNote();
    this.text = this.textNote.noteText;
  }

  getNote(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.textNote = this.notesService.getNote(id);
  }
  textChanged() {
    let buttonSave = document.querySelector('.btn-save');
    buttonSave!.classList.add('-changed');
  }
  saveText() {
    let buttonSave = document.querySelector('.btn-save');
    buttonSave!.classList.remove('-changed');
    const updatedTextNote = this.textNote;
    updatedTextNote.noteText = this.text;

    this.notesService.setText(updatedTextNote);
  }
}
