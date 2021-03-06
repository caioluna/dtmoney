import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F0F2F5;
    --shape: #FFFFFF;
    --input-bg: #E7E9EE;

    --red: #E52E4D;
    --green: #33CC95;
    --blue: #5429CC;

    --blue-light: #6933FF;

    --text-title: #363F5F;
    --text-body: #969CB3;
    
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    position: fixed;

    background-color: rgba(0,0,0,0.5);

    display: flex;
    justify-content: center;
    align-items: center;

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .react-modal-content{
    position: relative;

    width: 100%;
    max-width: 576px;

    border-radius: .3125rem;
    background-color: var(--background);

    padding: 3rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.3rem;
    top: 1.3rem;

    background-color: transparent;
    transition: filter .2s;
    
    &:hover {
      filter: brightness(.7);
    }
  }

`