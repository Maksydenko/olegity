import { IImg } from "@/interfaces/img.interface";

export interface IMusicPlatforms {
  spotify: string;
  appleMusic: string;
  youtubeMusic: string;
  deezer: string;
}

export interface ISingle {
  title: string;
  artist: string;
  genre: string;
  year: number;
  img: IImg;
  links: IMusicPlatforms;
}

export interface IAlbum extends ISingle {
  trackList: string[];
}
