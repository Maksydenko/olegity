export interface ILink {
  label: string;
  value?: string;
  subLinks?: Omit<ILink[], "subLinks">;
}

export interface ILinkWithSubLinks extends ILink {
  subLinks: ILink[];
}
