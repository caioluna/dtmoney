import styled from 'styled-components'

export const Container = styled.header`
  background: var(--blue);
  height: 13.25rem;
  padding-top: 2rem;
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background-color: var(--blue-light);
    color: #FFF;
    font-size: 1rem;

    padding: 0 2rem;
    height: 3rem;

    border-radius: 0.3125rem;

    transition: filter .2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

`