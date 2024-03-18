export interface ILink {
  icon: string;
  label: string;
  value: string;
}

export interface ILinkWithoutIcon extends Omit<ILink, "icon"> {}
export interface ILinkWithoutLabel extends Omit<ILink, "label"> {}
export interface ILinkWithoutValue extends Omit<ILink, "value"> {}

export interface INavLink extends Omit<ILinkWithoutIcon, "value"> {
  value?: string;
  subLinks?: Omit<ILinkWithoutIcon[], "subLinks">;
}

export interface INavLinkWithSubLinks extends INavLink {
  subLinks: ILinkWithoutIcon[];
}
