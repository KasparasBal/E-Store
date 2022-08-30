import Catwalk from "./Catwalk";
import Images from "./Images";

export default interface Media {
  images: Images[];
  catwalk: Catwalk[];
  spinset: string[];
  swatchSprite: string[];
}
