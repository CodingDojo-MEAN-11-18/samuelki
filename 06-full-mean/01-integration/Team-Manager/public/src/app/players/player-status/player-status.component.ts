import { Component, OnInit } from '@angular/core';
import { Player } from '../../models';
import { PlayerService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-status',
  templateUrl: './player-status.component.html',
  styleUrls: ['./player-status.component.css']
})
export class PlayerStatusComponent implements OnInit {

  players: Player[];

  constructor(
    private playerService: PlayerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.findPlayers();
  }

  findPlayers() {
    this.playerService.getPlayers().subscribe(players => {
      console.log(players);
      this.players = players;
    });
  }
  playing(player: Player) {
    console.log('changing player status to playing');
    this.playerService.statusPlay(player._id).subscribe(data => {
      this.findPlayers();
      console.log(data);
    });
  }
  notPlaying(player: Player) {
    console.log('changing player status to not playing');
    this.playerService.statusNp(player._id).subscribe(data => {
      this.findPlayers();
      console.log(data);
    });
  }
  undecided(player: Player) {
    console.log('changing player status to undecided');
    this.playerService.statusUd(player._id).subscribe(data => {
      this.findPlayers();
      console.log(data);
    });
  }
}
