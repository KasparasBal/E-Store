import Current from "./Current";
import Previous from "./Previous";
import Rrp from "./Rrp";

export default interface Price {
  current: Current;
  previous: Previous;
  Rrp: Rrp;
  isMarkedDown: boolean;
  isOutletPrice: boolean;
  currency: string;
}
