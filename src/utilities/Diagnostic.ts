import Analytics from "./Analytics";

export default interface Diagnostic {
  requestId?: string;
  processTime?: number;
  queryTime?: number;
  recomendationsEnabled?: boolean;
  recomendationsAnalytics?: Analytics;
}
