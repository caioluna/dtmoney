import Modal from "react-modal";
import { Container } from "./styles";
import closeImg from '../../assets/close.svg'

interface NewTransactionModalProps {
  isOpen: boolean,
  onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
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

        <Container>
          <fieldset>
            <legend>New transaction</legend>
            <input type="text" name="name" id="name" placeholder="Name" />
            
            <input type="number" name="value" id="value" placeholder="Value" />
            
            <input type="text" name="category" id="category" placeholder="Category" />

            <button type="submit" className="register">Register</button>
          </fieldset>
        </Container>
      </Modal>

  )
}