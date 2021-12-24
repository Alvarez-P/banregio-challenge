export const calculateInterest = (
  mount: number,
  term: number,
  interest_rate: number,
  commercial_year_days: number
): number => {
  return parseFloat(((mount * term * (interest_rate / 100)) / commercial_year_days).toFixed(2))
}
