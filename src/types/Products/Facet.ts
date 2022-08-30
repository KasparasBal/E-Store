import facetValue from "./facetValue";

export default interface Facet {
  id?: number;
  name?: string;
  facetValues?: facetValue[];
  displayStyle?: string;
  facetType?: string;
  hasSelectedValues?: boolean;
}
