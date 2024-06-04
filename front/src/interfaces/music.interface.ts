import { ITranslation } from "./translation.interface";

export interface IMusicPlatforms {
  id: number;
  spotify: string;
  appleMusic: string;
  youtubeMusic: string;
  deezer: string;
}

interface IMusicTranslation extends ITranslation {
  genre: string;
  genreID: number;
}

interface IMusic {
  id: number;
  title: string;
  artist: string;
  translations: IMusicTranslation[];
  year: string;
  img: string;
}

export interface ISingle extends IMusic, IMusicPlatforms {}

export interface ISingles {
  singles: ISingle[];
  maxPageID: number;
}

export interface ITrack {
  id: number;
  title: string;
}

export interface IAlbum extends IMusic {
  slug: string;
  links: IMusicPlatforms[];
  trackList: ITrack[];
}
