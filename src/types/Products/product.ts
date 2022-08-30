import Price from "./price";

export default interface Product {
  id?: number | undefined;
  name?: string | undefined;
  price?: Price | undefined;
  colour?: string | undefined;
  colourWayId?: number | undefined;
  brandName?: string | undefined;
  hasVariantColours?: boolean | undefined;
  hasMultiplePrices?: boolean | undefined;
  groupId?: number | null | undefined;
  productCode?: number | undefined;
  productType?: string | undefined;
  url?: string | undefined;
  imageUrl?: string | undefined;
  videoUrl?: string | null | undefined;
  isSellingFast?: boolean | undefined;
  sponsoredCampaignId?: null | undefined;
}
