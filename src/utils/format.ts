export function formatUsdc(value: number) {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export function formatUsdShortcut(value: number) {
  return `$${new Intl.NumberFormat('en-US', {
    maximumFractionDigits: value >= 100 ? 0 : 2,
  }).format(value)}`;
}
