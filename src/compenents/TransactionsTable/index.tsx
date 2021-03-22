import { useEffect } from "react";
import { api } from "../../services/api";
import { Conatier } from "./styles";

export function TransactionsTable() {
    useEffect(() => {
        api.get('transactions')
            .then(response => console.log(response.data));
    }, []);


    return(
        <Conatier>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className='deposit'>R$12.000</td>
                        <td>Job</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguél</td>
                        <td className='withdraw'>- R$12.000</td>
                        <td>Casa</td>
                        <td>20/02/2021</td>
                    </tr>
                </tbody>
            </table>
        </Conatier>
    );
}