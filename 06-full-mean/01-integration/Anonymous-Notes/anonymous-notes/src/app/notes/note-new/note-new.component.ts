import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NoteService } from '../../services';
import { Note } from '../../models';

@Component({
  selector: 'app-note-new',
  templateUrl: './note-new.component.html',
  styleUrls: ['./note-new.component.css']
})
export class NoteNewComponent implements OnInit {

  @Output() getEvent = new EventEmitter();

  note: Note;
  createdData: Object;

  constructor(
    private noteService: NoteService,
  ) { }

  ngOnInit() {
    this.note = { content: '' };
  }

  onSubmit() {
    console.log('Submitting note');
    this.noteService.createNote(this.note).subscribe(data => {
      console.log(data);
      this.createdData = data;
      this.note = { content: '' };
      this.getEvent.emit();
    });
  }

}
