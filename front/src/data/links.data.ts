export const links = [
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
        label: "pages.discography.albums",
        value: "/discography?tab=albums",
      },
      {
        label: "pages.discography.ep",
        value: "/discography?tab=ep",
      },
      {
        label: "pages.discography.singles",
        value: "/discography?tab=singles",
      },
    ],
  },
  {
    label: "pages.videos",
    value: "/videos",
  },
  {
    label: "pages.concerts",
    value: "/concerts",
  },
];
