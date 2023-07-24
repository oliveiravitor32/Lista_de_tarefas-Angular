import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogCreateNoteComponent } from './components/dialog-create-note/dialog-create-note.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NotePadComponent } from './components/note-pad/note-pad.component';
import { TextNoteComponent } from './components/text-note/text-note.component';
import { FilterPipe } from './filter.pipe';
import { DialogRenameNoteComponent } from './components/dialog-rename-note/dialog-rename-note.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DialogCreateNoteComponent,
    NotePadComponent,
    TextNoteComponent,
    FilterPipe,
    DialogRenameNoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
