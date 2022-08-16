import { HttpClient, HttpHandler } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { debounceTime, distinct, filter, switchMap } from "rxjs/operators";
import { MovieService } from "src/app/services/movie.service";
import { Movie } from "src/app/interfaces/movie";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.css"],
})
export class MoviesComponent implements OnInit {
  public searchCharacter = new FormControl();
  public movies$!: Observable<Movie[]>;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movies$ = this.searchCharacter.valueChanges
      .pipe(
        filter((searchCharacter: string) => searchCharacter.length > 3),
        debounceTime(400),
        distinct(),
        switchMap((response) => this.movieService.getMovies(response ?? ""))
      )
  }
}
