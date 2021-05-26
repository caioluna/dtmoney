import styled from "styled-components"

export const Content = styled.section`
  max-width: 1120px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;

  div {
    margin-top: -4.25rem;
    padding: 1.5rem 2rem;
    height: 8.5rem;

    background-color: var(--shape);
    border-radius: 0.3125rem;

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    img {
      width: 1.66rem;
    }

    strong {
      display: block;
      margin-top: .9rem;

      font-size: 2.25rem;
      font-weight: 500;
      line-height: 3.375rem;
    }

    span {
      font-weight: 400;
    }

    &.total-background {
      background-color: var(--green);
      color: #FFF;
    }
  }
`