import { Montserrat, Open_Sans } from "next/font/google";

export const fontMontserrat = Montserrat({
  subsets: ["latin", "cyrillic-ext"],
  variable: "--montserrat-font",
});

export const fontOpenSans = Open_Sans({
  subsets: ["latin", "cyrillic-ext"],
  variable: "--open-sans-font",
});
