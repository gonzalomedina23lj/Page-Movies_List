import { Component, Input, OnInit } from "@angular/core";
import { Movie } from "src/app/interfaces/movie";

@Component({
  selector: "app-file-movie",
  templateUrl: "./file-movie.component.html",
  styleUrls: ["./file-movie.component.css"],
})
export class FileMovieComponent implements OnInit {
  @Input("movie") movie!: Movie;

  constructor() {}

  ngOnInit(): void {
    console.log(this.movie);
  }

  getPoster(){
    if (this.movie.Poster === 'N/A') {
      return 'https://via.placeholder.com/300x444';  
    } else {
      return this.movie.Poster;
    }
  }
}


