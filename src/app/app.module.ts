import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { FileMovieComponent } from './components/file-movie/file-movie.component';
import { MoveFileComponent } from './components/move-file/move-file.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    FileMovieComponent,
    MoveFileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
