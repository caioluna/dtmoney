import styled from "styled-components";

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