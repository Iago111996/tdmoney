import { useState } from "react";
import Modal from "react-modal";

import { TransactionsProvider } from "./hooks/TransactionsContexts";

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";

import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");

export function App() {
  const [isVisibleModalNewTransaction, setIsVisibleModalNewTransaction] =
    useState(false);

  function handleOpenModalNewTransacton() {
    setIsVisibleModalNewTransaction(true);
  }

  function handleCloseModalNewTransacton() {
    setIsVisibleModalNewTransaction(false);
  }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenModalNewTransacton} />

      <NewTransactionModal
        isOpen={isVisibleModalNewTransaction}
        onRequestClose={handleCloseModalNewTransacton}
      />
      
      <Dashboard />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
