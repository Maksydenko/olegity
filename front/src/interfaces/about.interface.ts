import { ITranslation } from "./translation.interface";

interface IAboutTranslation extends ITranslation {
  title: string;
  text: string;
  sectionID: number;
}

interface IVideo {
  id: number;
  sectionID: number;
  title: string;
  link: string;
}

export interface IAbout {
  id: number;
  pageID: number;
  img: string;
  translations: IAboutTranslation[];
  video: IVideo[] | [];
}
