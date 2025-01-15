interface IWithTranslation {
  translation: "en" | "uk";
  [key: string]: any;
}

export const getTranslate = <T extends IWithTranslation>(
  items: T[],
  currentLanguage: string | undefined
): T | undefined => {
  return items?.find((item) => item.translation === currentLanguage);
};
