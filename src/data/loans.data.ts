import { Loans } from "../interfaces/loans.interface"
import { LoanState } from "../interfaces/loanState.enum"

export const LoansRepository: Loans[] = [
    {
        id: 1,
        cliente: "001003228",
        fecha: new Date("2021-01-10"),
        monto: 37500,
        estado: LoanState.PENDING
    },
    {
        id: 2,
        cliente: "001003228",
        fecha: new Date("2021-01-19"),
        monto: 725.18,
        estado: LoanState.PENDING
    },
    {
        id: 3,
        cliente: "001003228",
        fecha: new Date("2021-01-31"),
        monto: 1578.22,
        estado: LoanState.PENDING
    },
    {
        id: 4,
        cliente: "001003228",
        fecha: new Date("2021-02-04"),
        monto: 380,
        estado: LoanState.PENDING
    },
    {
        id: 1,
        cliente: "700999925",
        fecha: new Date("2021-01-07"),
        monto: 2175.25,
        estado: LoanState.PAID_OUT
    },
    {
        id: 2,
        cliente: "700999925",
        fecha: new Date("2021-01-13"),
        monto: 499.99,
        estado: LoanState.PAID_OUT
    },
    {
        id: 3,
        cliente: "700999925",
        fecha: new Date("2021-01-24"),
        monto: 5725.18,
        estado: LoanState.PENDING
    },
    {
        id: 4,
        cliente: "700999925",
        fecha: new Date("2021-02-07"),
        monto: 876.13,
        estado: LoanState.PENDING
    },
    {
        id: 1,
        cliente: "00298185",
        fecha: new Date("2021-02-04"),
        monto: 545.55,
        estado: LoanState.PENDING
    },
    {
        id: 1,
        cliente: "15000125",
        fecha: new Date("2020-31-12"),
        monto: 15220,
        estado: LoanState.PAID_OUT
    }
]