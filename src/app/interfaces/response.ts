import { Movie } from "./movie";

export interface Response {
    Search: Movie[];
    totalResults: string;
    Response: string;

}