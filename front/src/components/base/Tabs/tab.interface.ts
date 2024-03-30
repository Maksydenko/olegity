import { Key, ReactNode } from "react";

export interface ITab {
  id: Key;
  title: ReactNode;
  content: ReactNode;
}
