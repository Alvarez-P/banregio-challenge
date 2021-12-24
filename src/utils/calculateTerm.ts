export const calculateTerm = (current: Date, loanDate: Date): number => {
    const difference: number = Math.abs(current.getTime() - loanDate.getTime())
    return difference / (1000 * 3600 * 24)
}