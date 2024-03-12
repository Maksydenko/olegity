import { CollapsePanelProps } from "rc-collapse";
import { Key, ReactNode } from "react";

export interface IPanels {
  key: Key;
  header: CollapsePanelProps["header"];
  content: CollapsePanelProps["children"];
}
