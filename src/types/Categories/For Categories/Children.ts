import { ReactNode } from "react";
import Content from "./Content";
import Display from "./Display";
import Link from "./Link";
import Style from "./Style";

export default interface Children {
  id: string;
  alias: string;
  type: string;
  channelExclusions: string[];
  webLargePriority: number;
  content: Content | undefined;
  display: Display | null;
  style: Style;
  link: Link;
  children: Children[];
}
