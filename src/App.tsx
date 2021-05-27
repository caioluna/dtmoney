import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from './styles/global';

import { useState } from 'react';
import Modal from 'react-modal'

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionsModalOpen, setIsNewTransacitonsModalOpen] = useState(false)

  function handleOpenNewTransactionsModal() {
    setIsNewTransacitonsModalOpen(true)
  }
  function handleCloseNewTransactionsModal() {
    setIsNewTransacitonsModalOpen(false)
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionsModal} />
      <Dashboard />
      <GlobalStyle />
      <NewTransactionModal
        isOpen={isNewTransactionsModalOpen}
        onRequestClose={handleCloseNewTransactionsModal}
      />
    </>
  );
}