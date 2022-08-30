import variantPrice from "./variantPrice";

export default interface Variants {
  id: number;
  name: string;
  sizeId: number;
  brandSize: string;
  sizeDescription: string;
  displaySizeText: string;
  sizeOrder: number;
  sku: string;
  isLowInStock: boolean;
  IsInStock: boolean;
  isAvailable: boolean;
  colourWayId: number;
  colourCode: string;
  colour: string;
  price: variantPrice;
  isPrimary: boolean;
  isProp65Risk: boolean;
  ean: null;
  seller: string | null;
}
