import { useTransactions } from '../../hooks/useTransactions';
import {
  BrDateFormatter,
  CurrencyValueFormatter,
} from '../../utils/CurrencyValueFormatter';
import { Conatier } from './styles';

export function TransactionsTable() {
  const { transactions } = useTransactions();
  return (
    <Conatier>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {transaction.type === 'deposit'
                  ? CurrencyValueFormatter(transaction.amount)
                  : `- ${CurrencyValueFormatter(transaction.amount)}`}
              </td>
              <td>{transaction.category}</td>
              <td>{BrDateFormatter(new Date(transaction.createdAt))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Conatier>
  );
}
