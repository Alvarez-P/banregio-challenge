import { Rates } from "../interfaces/rates.interface"

export const RatesRepository: Rates[] = [
    {
        plazo_min: 1,
        plazo_max: 1,
        tasa_interes: 7.00
    },
    {
        plazo_min: 2,
        plazo_max: 7,
        tasa_interes: 6.50
    },
    {
        plazo_min: 8,
        plazo_max: 15,
        tasa_interes: 6.00
    },
    {
        plazo_min: 16,
        plazo_max: 30,
        tasa_interes: 5.50
    },
    {
        plazo_min: 31,
        plazo_max: 360,
        tasa_interes: 5.00
    }
]