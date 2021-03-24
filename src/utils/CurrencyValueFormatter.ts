export function CurrencyValueFormatter(value: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

export function BrDateFormatter(date: Date) {
  return new Intl.DateTimeFormat('pt-BR').format(date);
}
