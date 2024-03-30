interface IAddSearchParam {
  (pathname: string, key: string, value?: string): string;
}

export const addSearchParam: IAddSearchParam = (pathname, key, value) => {
  const url = new URL(pathname, "http://localhost");

  if (value) {
    url.searchParams.set(key, value);
  } else {
    if (url.searchParams.has(key)) {
      url.searchParams.delete(key);
    }
  }

  return url.pathname + url.search;
};
