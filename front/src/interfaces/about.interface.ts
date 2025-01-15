import { ITranslation } from "./translation.interface";
export interface IAboutTranslation extends ITranslation {
  title: string;
  text: string;
  sectionID: number;
  AboutSectionsID: number;
}

export interface IAboutSection {
  ID: number;
  pageID: number;
  img: string;
  link: string | null;
}

export interface IAbout extends IAboutSection {
  translations: IAboutTranslation[];
}
