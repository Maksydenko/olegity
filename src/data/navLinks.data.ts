import { INavLink } from "@/interfaces/link.interface";

export const navLinks: INavLink[] = [
  {
    label: "pages.home",
    value: "/",
  },
  {
    label: "pages.about",
    value: "/about",
  },
  {
    label: "pages.discography",
    value: "/discography",
    subLinks: [
      {
        label: "albums",
        value: "/discography?tab=albums",
      },
      {
        label: "ep",
        value: "/discography?tab=ep",
      },
      {
        label: "singles",
        value: "/discography?tab=singles",
      },
    ],
  },
  {
    label: "pages.videos",
    value: "/videos",
    subLinks: [
      {
        label: "music-videos",
        value: "/videos?tab=music-videos",
      },
      {
        label: "animated-videos",
        value: "/videos?tab=animated-videos",
      },
    ],
  },
  {
    label: "pages.concerts",
    value: "/concerts",
  },
];
