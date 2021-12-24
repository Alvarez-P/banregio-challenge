# Respuestas

## input

``` js
{
  fecha_actual: '2021-02-15',
  cliente: '001003228',
  tasa_IVA: 16.0,
  dias_año_comercial: 360,
}
```

## output

``` js
[ 
    { 
        Cliente: '001003228',
        Plazo: 36,
        Pago: 37531.875,
        Tasa_Interes: 5,
        Monto: 37500,
        Interes: 187.5,
        IVA: 30 
    },
    { 
        Cliente: '001003228',
        Plazo: 27,
        Pago: 725.6899,
        Tasa_Interes: 5.5,
        Monto: 725.18,
        Interes: 2.99,
        IVA: 0.48 
    },
    { 
        Cliente: '001003228',
        Plazo: 15,
        Pago: 1578.8895000000002,
        Tasa_Interes: 6,
        Monto: 1578.22,
        Interes: 3.95,
        IVA: 0.63 
    },
    { 
        Cliente: '001003228',
        Plazo: 11,
        Pago: 380.117,
        Tasa_Interes: 6,
        Monto: 380,
        Interes: 0.7,
        IVA: 0.11 
    } 
]
```