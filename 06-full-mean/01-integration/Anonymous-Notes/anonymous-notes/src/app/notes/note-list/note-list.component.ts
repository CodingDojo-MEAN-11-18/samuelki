import { Component, OnInit } from '@angular/core';
import { Note } from '../../models';
import { NoteService } from '../../services';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  notes: Note[];

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.findNotes();
  }

  findNotes() {
    this.noteService.getNotes().subscribe(notes => {
      console.log(notes);
      this.notes = notes;
    });
  }
  onDelete(note: Note) {
    console.log('Deleting note', note);
    this.noteService.deleteNote(note._id).subscribe(data => {
      console.log(data);
      this.findNotes();
    })
  }

}
