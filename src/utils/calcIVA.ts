export const calculateIVA = (
    interest: number,
    iva_rate: number,
  ): number => {
    return parseFloat((interest * (iva_rate / 100)).toFixed(2))
  }
  