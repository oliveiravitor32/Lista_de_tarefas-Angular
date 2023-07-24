import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TextNoteComponent } from './components/text-note/text-note.component';
import { NotePadComponent } from './components/note-pad/note-pad.component';

const routes: Routes = [
  { path: '', component: NotePadComponent },
  { path: 'note/:id', component: TextNoteComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
