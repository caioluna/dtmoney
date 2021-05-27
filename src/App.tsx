import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { GlobalStyle } from './styles/global';

import Modal from 'react-modal'
import { useState } from 'react';

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
      <Modal 
        isOpen={isNewTransactionsModalOpen}
        onRequestClose={handleCloseNewTransactionsModal}
      />
    </>
  );
}