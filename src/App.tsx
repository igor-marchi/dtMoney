import { Fragment, useState } from 'react';
import { Dashboard } from './compenents/Dashboard';
import { Header } from './compenents/Header';
import Modal from 'react-modal';

import { GlobalStyle } from './styles/Global';
import { NewTransactionModal } from './compenents/NewTransactionModal';

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
    <Fragment>
      <Header onOpenNewTransactionModal={HandleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={HandleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </Fragment>
  );
}
