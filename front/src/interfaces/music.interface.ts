import { IGenre } from "./genre.interface";

export interface IMusicPlatforms {
  spotify: string;
  appleMusic: string;
  youtubeMusic: string;
  deezer: string;
}

interface IMusic extends IMusicPlatforms {
  ID: number;
  title: string;
  artist: string;
  genre: IGenre[];
  year: string;
  img: string;
}

export interface ISingle extends IMusic {}

export interface ITrack {
  ID: number;
  title: string;
}

export interface IAlbum extends IMusic {
  slug: string;
  links: IMusicPlatforms[];
  trackList: ITrack[];
}
