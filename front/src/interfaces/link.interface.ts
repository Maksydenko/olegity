export interface ILink {
  value: string;
  path?: string;
  subLinks?: Omit<ILink[], "subLinks">;
}

export interface ILinkWithSubLinks extends ILink {
  subLinks: ILink[];
}
