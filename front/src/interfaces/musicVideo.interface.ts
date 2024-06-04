interface IVideo {
  id: number;
  title: string;
  link: string;
}

export interface IMusicVideo {
  id: number;
  pageID: number;
  img: string;
  video: IVideo[];
}
