export interface IMusicPlatforms {
  id: number;
  spotify: string;
  appleMusic: string;
  youtubeMusic: string;
  deezer: string;
}

interface IGenre {
  id: number;
  translation: "en" | "uk";
  text: string;
}

export interface ISingle {
  id: number;
  title: string;
  artist: string;
  genre: IGenre[];
  year: string;
  img: string;
  links: IMusicPlatforms[];
}

export interface ITrack {
  id: number;
  title: string;
}

export interface IAlbum extends ISingle {
  slug: string;
  trackList: ITrack[];
}
