import styled from "styled-components";

export const Container = styled.section`
  max-width: 1120px;
  margin: 0 auto;
  margin-top: 2.75rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    text-align: left;
    color: var(--text-body);
   
    th {
      font-weight: 400;
      padding: 0 2rem;
    }

    tbody {
      
      tr {

        td {
          padding: 1.25rem 2rem;
          background-color: #FFF;

          &:first-child {
            border-radius: 0.3125rem 0 0 0.3125rem;
            color: var(--text-title);
          }

          &:last-child {
            border-radius: 0 0.3125rem 0.3125rem 0;
          }
        }
      }
    }
  }

  .income {
    color: var(--green);
  }

  .expense {
    color: var(--red);
  }
`