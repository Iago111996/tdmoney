import { useContext } from "react";

import IncomeImg from "../../assets/income.svg";
import OutcomeImg from "../../assets/outcome.svg";
import TotolImg from "../../assets/total.svg";

import { Container } from "./styles";

import { TransactionsContext } from "../../TransactionsContexts";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>

          <img src={IncomeImg} alt="Entradas" />
        </header>

        <strong>R$1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saída</p>

          <img src={OutcomeImg} alt="Saída" />
        </header>

        <strong>- R$500,00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>

          <img src={TotolImg} alt="Total" />
        </header>

        <strong>R$500,00</strong>
      </div>
    </Container>
  );
}
