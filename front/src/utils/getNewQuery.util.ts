interface IHandlePageChange {
  (
    queryObject: {
      [k: string]: string;
    },
    searchParam: string,
    value: string
  ): string;
}

export const getNewQuery: IHandlePageChange = (
  queryObject,
  searchParam,
  value
) => {
  const newQuery = { ...queryObject };

  // Add the parameter only if the new value is not empty
  if (value !== "") {
    newQuery[searchParam] = value;
  }
  // If the new value is empty and the parameter already exists, delete it
  else if (value === "" && searchParam in newQuery) {
    delete newQuery[searchParam];
  }

  const queryString = new URLSearchParams(newQuery).toString();
  return `?${queryString}`;
};
