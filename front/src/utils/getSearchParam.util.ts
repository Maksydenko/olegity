interface IGetSearchParam {
  (pathname: string, key: string): string | null;
}

export const getSearchParam: IGetSearchParam = (pathname, key) => {
  const url = new URL(pathname, "http://localhost");
  const { searchParams } = url;

  return searchParams.get(key);
};
