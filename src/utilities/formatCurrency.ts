const CURRENCY_FORMATTER = new Intl.NumberFormat("lt-LT", {
  currency: "EUR",
  style: "currency",
});

export default function formatCurrency(number: number) {
  return CURRENCY_FORMATTER.format(number);
}
