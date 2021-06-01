import Modal from "react-modal"
import { FormEvent, useState } from "react"
import { Container, TransactionTypeContainer, RadioBox } from "./styles"
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import expenseImg from '../../assets/outcome.svg'
import { api } from "../../services/api"

interface NewTransactionModalProps {
  isOpen: boolean,
  onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')
  const [transactionType, setTransactionType] = useState('income')

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    const data = {
      title,
      amount,
      category,
      transactionType
    }

    api.post('/transactions', data)
  }

  return (

      <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button className="react-modal-close" type="button" onClick={onRequestClose}>
          <img src={closeImg} alt="close modal" />
        </button>

        <Container onSubmit={handleCreateNewTransaction}>
          <fieldset>
            <legend>New transaction</legend>
            <input 
              type="text" 
              name="name" 
              id="name" 
              placeholder="Name" 
              value={title}
              onChange={event => setTitle(event.target.value)}
            />
            
            <input 
              type="number" 
              name="value" 
              id="value" 
              placeholder="Value"
              value={amount}
              onChange={event => setAmount(Number(event.target.value))}
            />

            <TransactionTypeContainer>

              <RadioBox
                type="button"
                onClick={() => { setTransactionType('income')}}
                isActive={transactionType === 'income'}
                activeColor='green'
              >
                <img src={incomeImg} alt="income" />
                <span>Income</span>
              </RadioBox>
              
              <RadioBox
                type="button"
                onClick={() => { setTransactionType('expense')}}
                isActive={transactionType === 'expense'}
                activeColor='red'
              >
                <img src={expenseImg} alt="expense" />
                <span>Expense</span>
              </RadioBox>
              
            </TransactionTypeContainer>
            
            <input 
              type="text" 
              name="category" 
              id="category" 
              placeholder="Category"
              value={category}
              onChange={event => setCategory(event.target.value)}
            />

            <button type="submit" className="register">Register</button>
          </fieldset>
        </Container>
      </Modal>

  )
}