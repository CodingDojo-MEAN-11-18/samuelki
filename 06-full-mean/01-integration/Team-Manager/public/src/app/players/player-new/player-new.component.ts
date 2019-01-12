import { Component, OnInit } from '@angular/core';
import { Player } from '../../models';
import { PlayerService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-new',
  templateUrl: './player-new.component.html',
  styleUrls: ['./player-new.component.css']
})
export class PlayerNewComponent implements OnInit {

  player: Player;
  error: Object;

  constructor(
    private playerService: PlayerService,
    private rotuer: Router
  ) { }

  ngOnInit() {
    this.player = { name: '' };
  }

  onSubmit() {
    this.playerService.createPlayer(this.player).subscribe(data => {
      console.log('Creating player', data);
      this.error = data;
      this.rotuer.navigate(['players/list']);
    })
  }
}
