import { LoansRepository } from './data/loans.data'
import { RatesRepository } from './data/rates.data'
import { Input } from './interfaces/input.interface'
import { Loans } from './interfaces/loans.interface'
import { LoanState } from './interfaces/loanState.enum'
import { Output } from './interfaces/output.interface'
import { Rates } from './interfaces/rates.interface'
import { calculateInterest } from './utils/calcInterest'
import { calculateIVA } from './utils/calcIVA'
import { calculatePayment } from './utils/calcPayment'
import { calculateTerm } from './utils/calculateTerm'

const app = (input: Input): Output[] => {
  const output: Output[] = []
  const clientLoans: Loans[] = LoansRepository.filter(
    (loan) =>
      loan.cliente === input.cliente && loan.estado === LoanState.PENDING
  )
  clientLoans.sort((a, b) => {
    if (a.fecha > b.fecha) return 1
    if (a.fecha < b.fecha) return -1
    return 0
  })
  
  clientLoans.map((loan) => {    
    const loanOuput: Output = {
      Cliente: loan.cliente,
      Plazo: calculateTerm(input.fecha_actual, loan.fecha),
      Pago: 0,
      Tasa_Interes: 0,
      Monto: loan.monto,
      Interes: 0,
      IVA: 0,
    }
    const rate: Rates = RatesRepository.find(
      (rate) =>
        rate.plazo_min <= loanOuput.Plazo && rate.plazo_max >= loanOuput.Plazo
    )
    loanOuput.Interes = calculateInterest(
      loan.monto,
      loanOuput.Plazo,
      rate.tasa_interes,
      input.dias_año_comercial
    )
    loanOuput.Tasa_Interes = rate.tasa_interes
    loanOuput.IVA = calculateIVA(loanOuput.Interes, input.tasa_IVA)
    loanOuput.Pago = calculatePayment(loan.monto, loanOuput.Interes, loanOuput.IVA)
    output.push(loanOuput)
  })
  return output
}
const input: Input = {
  fecha_actual: new Date('2021-02-15'),
  cliente: '001003228',
  tasa_IVA: 16.0,
  dias_año_comercial: 360,
}
console.log(app(input))
