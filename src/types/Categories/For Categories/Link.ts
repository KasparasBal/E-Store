export default interface Link {
  linkType: string;
  brandSectionAlias: string | null;
  categoryId: string | number | null;
  webUrl: string | null;
  appUrl: string | null;
}
