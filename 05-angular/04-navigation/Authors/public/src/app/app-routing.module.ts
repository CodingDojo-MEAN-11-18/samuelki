import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuotesComponent } from './quotes/quotes.component';
import { AuthorsComponent } from './authors/authors.component';
import { NewauthorComponent } from './newauthor/newauthor.component';
import { NewquoteComponent } from './newquote/newquote.component';

const routes: Routes = [
  { path: 'authors', component: AuthorsComponent },
  { path: 'authors/quotes/:id', component: QuotesComponent },
  { path: 'newquote/:id', component: NewquoteComponent },
  { path: 'authors/newauthor', component: NewauthorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
