import incomImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';
import { CurrencyValueFormatter } from '../../utils/CurrencyValueFormatter';

import { Container } from './styles';

export function Summary() {
  const { transactions } = useTransactions();

  const sumarry = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomImg} alt="entradas" />
        </header>
        <strong>{CurrencyValueFormatter(sumarry.deposits)}</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="saidas" />
        </header>
        <strong>- {CurrencyValueFormatter(sumarry.withdraws)}</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="total" />
        </header>
        <strong>{CurrencyValueFormatter(sumarry.total)}</strong>
      </div>
    </Container>
  );
}
