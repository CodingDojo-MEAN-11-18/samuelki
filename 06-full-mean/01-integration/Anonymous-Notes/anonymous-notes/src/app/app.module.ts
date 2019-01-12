import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { OrderModule } from 'ngx-order-pipe';
import { NoteListComponent } from './notes/note-list/note-list.component';
import { NoteNewComponent } from './notes/note-new/note-new.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    NoteNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ScrollingModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
