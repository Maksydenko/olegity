interface IGetTranslationValueByKey {
  (keyword: string, key: string): string;
}

export const getTranslationValueByKey: IGetTranslationValueByKey = (
  keyword,
  key
) => {
  return `${keyword}.${key}`;
};
