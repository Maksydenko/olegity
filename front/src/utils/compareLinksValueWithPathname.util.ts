import { ILink } from "@/interfaces/link.interface";

interface ILinkWithValue {
  value?: ILink["value"];
  [key: string]: any;
}

interface ICompareLinksValueWithPathname {
  (links: ILinkWithValue[], pathname: string): boolean;
}

export const compareLinksValueWithPathname: ICompareLinksValueWithPathname = (
  links,
  pathname
) => {
  const isActiveSubLink = links?.some((subLinks) => {
    const value = subLinks?.value;

    if (!value) {
      return false;
    }

    const queryIndex = value.indexOf("?");
    const subLinkValueWithoutQuery =
      queryIndex !== -1 ? value.substring(0, queryIndex) : value;

    return subLinkValueWithoutQuery === pathname;
  });

  return isActiveSubLink;
};
