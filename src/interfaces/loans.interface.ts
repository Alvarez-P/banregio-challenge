import { LoanState } from "./loanState.enum"

export interface Loans {
  id: number
  cliente: string
  fecha: Date
  monto: number
  estado: LoanState
}

