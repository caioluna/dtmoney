import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";


export function TransactionsTable() {

  useEffect(() => {
    api.get('transactions')
      .then(response => console.log(response.data))
  },[])

  return (
    <Container>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Website development</td>
            <td className="income">R$ 12.000,00</td>
            <td>Sale</td>
            <td>13/04/2021</td>
          </tr>
          <tr>
            <td>Vegan Burger</td>
            <td className="expense">- R$ 30,00</td>
            <td>Food</td>
            <td>10/04/2021</td>
          </tr>
        </tbody>
      </table>

    </Container>
  )
}