import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Movie } from "../interfaces/movie";

@Injectable({
  providedIn: "root",
})
export class MovieService {
  constructor(private http: HttpClient) {}

  public getMovies(searchCharacter: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${environment.API.moviesAPI}&s=${searchCharacter}`);
  }
}
