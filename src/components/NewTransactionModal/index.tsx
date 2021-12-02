import { FormEvent, useState } from "react";
import Modal from "react-modal";

import CloseImg from "../../assets/close.svg";
import IncomeImg from "../../assets/income.svg";
import OutcomeImg from "../../assets/outcome.svg";
import { useTransactions } from "../../hooks/TransactionsContexts";

import { Container, TransactionTypeContainer, RadioBox } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("deposit");
  const [category, setCategory] = useState("");

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    // console.log({
    //      title,
    //   amount,
    //   category,
    //   type
    // });

    await createTransaction({
      title,
      amount,
      category,
      type,
    });

    setTitle("");
    setAmount(0);
    setType("deposit");
    setCategory("");

    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={CloseImg} alt="Fechar modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar nova trasação</h2>

        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            isActivity={type === "deposit"}
            activityColor="green"
            onClick={() => setType("deposit")}
          >
            <img src={IncomeImg} alt="Entrada" />

            <span>Entradas</span>
          </RadioBox>

          <RadioBox
            type="button"
            isActivity={type === "withdraw"}
            activityColor="red"
            onClick={() => setType("withdraw")}
          >
            <img src={OutcomeImg} alt="Saída" />

            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
