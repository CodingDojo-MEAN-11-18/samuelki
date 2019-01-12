import { Component, OnInit } from '@angular/core';
import { Player } from '../../models';
import { PlayerService } from '../../services';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  players: Player[];

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.findPlayers();
  }

  findPlayers() {
    this.playerService.getPlayers().subscribe(players => {
      console.log(players);
      this.players = players;
    });
  }
  removePlayer(player: Player) {
    if (confirm(`Are you sure you want to delete ${player.name}?`)) {
      this.playerService.deletePlayer(player._id).subscribe(data => {
        console.log(data);
        this.findPlayers();
      });
    } else {
      console.log('Cancelled delete');
      this.findPlayers();
    }
  }

}
