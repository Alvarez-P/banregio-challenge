export const calculatePayment = (
  mount: number,
  interest: number,
  iva: number
): number => {
  return mount + interest / 100 + iva
}
