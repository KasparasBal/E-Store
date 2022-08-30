import Children from "./Children";
import Content from "./Content";
import Display from "./Display";
import Link from "./Link";
import Style from "./Style";

export default interface Brands {
  id: string;
  alias: string;
  type: string;
  channelExclusions: string[];
  webLargePriority: number;
  content: Content;
  display: Display | null;
  style: Style;
  link: Link;
  children: Children[];
}
