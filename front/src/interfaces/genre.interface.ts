import { ITranslation } from "./translation.interface";

export interface IGenre extends ITranslation {
  genre: string;
  genreID: number;
}
