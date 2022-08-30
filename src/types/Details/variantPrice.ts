import VariantCPRX from "./VariantCPRX";

export default interface variantPrice {
  current: VariantCPRX;
  previous: VariantCPRX;
  rrp: VariantCPRX;
  xrp: VariantCPRX;
  currency: string;
  isMarkedDown: boolean;
  isOutletPrice: boolean;
  startDateTime: string;
  wasPriceStartDate: string | null;
}
