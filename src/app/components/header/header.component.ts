import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogCreateNoteComponent } from '../dialog-create-note/dialog-create-note.component';
import { NotesService } from 'src/app/services/notes.service';
import { SearchNoteService } from 'src/app/services/search-note.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  note: string = '';

  userInHome: boolean = true;

  constructor(
    public dialog: MatDialog,
    private notesService: NotesService,
    private searchNoteService: SearchNoteService,
    public router: Router
  ) {
    notesService.changeHeader.subscribe((value) => {
      this.userInHome = value;
    });
  }
  ngOnInit(): void {
    let pathUrl = window.location.pathname;
    pathUrl != '/' ? (this.userInHome = false) : '';
  }
  handleSearch(event: any): void {
    this.searchNoteService.emitChangeFilterNotes(event.target.value);
  }
  goToHome() {
    let buttonSave = document.querySelector('.btn-save');
    let isChanged = buttonSave!.classList.contains('-changed');
    if (isChanged) {
      let leaveToHome = confirm('Exit without saving changes?');
      if (leaveToHome) {
        this.router.navigate(['/']);
        this.userInHome = true;
      }
    } else {
      this.router.navigate(['/']);
      this.userInHome = true;
    }
  }
  onSubmit = (event: any) => {
    event.preventDefault();
  };
  newNote(): void {
    const dialogRef = this.dialog.open(DialogCreateNoteComponent, {
      width: 'auto',
      height: 'auto',
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
