import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerListComponent } from './players/player-list/player-list.component';
import { PlayerNewComponent } from './players/player-new/player-new.component';
import { PlayerStatusComponent } from './players/player-status/player-status.component';

const routes: Routes = [
  { path: 'players/new', component: PlayerNewComponent },
  { path: 'players/list', component: PlayerListComponent },
  { path: 'status/game/1', component: PlayerStatusComponent },
  { path: '', pathMatch: 'full', redirectTo: '/players/list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
