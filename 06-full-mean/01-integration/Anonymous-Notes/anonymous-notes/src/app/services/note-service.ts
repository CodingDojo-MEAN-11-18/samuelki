import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

import { Note } from '../models';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private readonly http: HttpClient) {}

  createNote(note) {
    return this.http.post('/notes', note);
  }
  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>('/notes');
  }
  deleteNote(noteID) {
    return this.http.delete(`/notes/${noteID}`);
  }
}
