import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRenameNoteComponent } from './dialog-rename-note.component';

describe('DialogRenameNoteComponent', () => {
  let component: DialogRenameNoteComponent;
  let fixture: ComponentFixture<DialogRenameNoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogRenameNoteComponent]
    });
    fixture = TestBed.createComponent(DialogRenameNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
