import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotePadComponent } from './note-pad.component';

describe('NotePadComponent', () => {
  let component: NotePadComponent;
  let fixture: ComponentFixture<NotePadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotePadComponent]
    });
    fixture = TestBed.createComponent(NotePadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
