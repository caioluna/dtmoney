import { Content } from './styles'

import incomeImg from '../../assets/income.svg';
import expenseImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';


export function Summary() {
  return (
    <Content>

      <div>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt="income" />
        </header>
        <strong>R$ 17.400<span>,00</span></strong>
      </div>

      <div>
        <header>
          <p>Expense</p>
          <img src={expenseImg} alt="expense" />
        </header>
        <strong>-R$ 1.259<span>,00</span></strong>
      </div>

      <div className="total-background" >
        <header>
          <p>Total</p>
          <img src={totalImg} alt="total" />
        </header>
        <strong>R$ 16.141<span>,00</span></strong>
      </div>
      
    </Content>
  )
}