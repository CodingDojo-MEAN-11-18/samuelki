import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Player } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private base = '/api/players';

  constructor(private http: HttpClient) {}

  createPlayer(player) {
    return this.http.post(this.base, player);
  }
  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.base);
  }
  deletePlayer(playerID) {
    return this.http.delete(`${this.base}/${playerID}`);
  }
  statusPlay(playerID) {
    return this.http.put(`${this.base}/${playerID}`, { status: 'playing' });
  }
  statusNp(playerID) {
    return this.http.put(`${this.base}/${playerID}`, { status: 'not playing' });
  }
  statusUd(playerID) {
    return this.http.put(`${this.base}/${playerID}`, { status: 'undecided' });
  }
}
