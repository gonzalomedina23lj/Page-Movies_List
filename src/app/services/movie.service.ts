import { Injectable } from "@angular/core";
import { map, Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Movie } from "../interfaces/movie";

@Injectable({
  providedIn: "root",
})
export class MovieService {
  constructor(private http: HttpClient) {}

  public getMovies(searchCharacter: string): Observable<Movie[]> {
    return this.http
      .get<Movie[]>(`${environment.API.moviesAPI}&s=${searchCharacter}`)
      .pipe(map((res: any) => res.Search));
  }
}

// const iniciarServicio = (): void => {
//   const productos = ["cepillo de dientes", "chocolates", "mermelada"];
//   const productosNumeros = [1, 2, 3];
//   const productosEmbolsados = embolsar(productos);
//   const productosNumerosEmbolsados = embolsar(productosNumeros);
  
// };

// const embolsar = <T>(productos: T[]): { material: string; objetos: Observable<T[]> } => {
//   return {
//     material: "plastico",
//     objetos: of(productos),
//   };
// };
