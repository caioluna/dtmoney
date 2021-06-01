import styled from "styled-components";
import { darken, transparentize } from 'polished'

export const Container = styled.form`

fieldset {

  legend {
    margin: 1rem 0 1.25rem;

    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-title)
  }

  input {
    width: 100%;
    height: 4rem;

    /* margin: .5rem 0; */
    padding: 1.25rem 1.5rem;

    border: 1px solid #D7D7D7;
    border-radius: .3125rem;
    background-color: var(--input-bg);
    color: var(--text-body);
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
      opacity: 1;
    }

    & + input {
      margin-top: 1rem;
    }
  }

  label {
    display: none;
  }

  button[type="submit"] {
    margin: 1.5rem 0 1rem;

    height: 4rem;
    width: 100%;

    background-color: var(--green);
    color: #FFFFFF;
    border-radius: .3125rem;
    font-size: 1rem;
    font-weight: 600;
    transition: filter .2s;

    &:hover {
      filter: saturate(1.4);
    }
  }
}
`

export const TransactionTypeContainer = styled.div`

  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: .5rem;

  
`

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'red' | 'green';
}

const colors = {
  red: '#E52E4D',
  green: '#33CC95'
}

export const RadioBox = styled.button<RadioBoxProps>`

  display: flex;
  justify-content:center;
  align-items: center;
  height: 4rem;

  border: 1.5px solid #d7d7d7;
  border-radius: .3125rem;
  
  background-color: ${(props) => props.isActive ? transparentize(.9, colors[props.activeColor]) : 'transparent'};
  transition:border-color .2s;

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }

  img {
    width: 20px;
    height: 20px; 
  }

  span {
    display:inline-block;
    margin-left: 1.1rem;
    color: var(--text-title);
    font-size: 1rem;
  }
  
`