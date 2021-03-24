import { useState } from 'react';
import { Dashboard } from './compenents/Dashboard';
import { Header } from './compenents/Header';
import Modal from 'react-modal';

import { TransactionsProvider } from './hooks/useTransactions';
import { NewTransactionModal } from './compenents/NewTransactionModal';

import { GlobalStyle } from './styles/Global';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(
    false
  );

  function HandleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function HandleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={HandleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={HandleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
