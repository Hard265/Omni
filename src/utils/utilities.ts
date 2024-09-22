const currencyFormatter = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'MWK',
  signDisplay: 'never',
  maximumFractionDigits: 2,
});

export const formatCurrency = (value: number) => {
  return currencyFormatter.format(value);
};
