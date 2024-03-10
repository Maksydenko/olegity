import { getExtensionFromPath } from "./getExtensionFromPath.util";

interface IGetType {
  (path: string): string;
}

export const getType: IGetType = (path) => {
  return `video/${getExtensionFromPath(path)}`;
};
