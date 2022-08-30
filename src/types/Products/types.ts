import Campaign from "./Campaign";
import Diagnostic from "./Diagnostic";
import Facet from "./Facet";
import Product from "./product";
import SearchPassMeta from "./SearchPassMeta";

export default interface Types {
  searchTerm?: string;
  categoryName?: string;
  itemCount?: number;
  redirectUrl?: string;
  products?: Product[];
  facets?: Facet[];
  diagnostics?: Diagnostic;
  searchPassMeta?: SearchPassMeta;
  queryId?: null;
  discorverSearchProductTypes?: string[];
  campaigns?: Campaign;
}
