import { Key, ReactNode } from "react";
import { CollapsePanelProps } from "rc-collapse";

export interface IPanels {
  key: Key;
  header: CollapsePanelProps["header"];
  content: CollapsePanelProps["children"];
}
