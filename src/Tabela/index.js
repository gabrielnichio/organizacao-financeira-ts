import './Tabela.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';


const Tabela = (props) => {


    return (
        (props.investimentos.length > 0) && <section className='tabela' style={{ backgroundColor: props.cor }}>
            <h3>{props.label}</h3>
            <table>
                <thead>
                    <tr>
                        <th>{props.columnName}</th>
                        <th>Valor unitário</th>
                        <th>Quantidade</th>
                        <th>Total</th>
                        <th>Remover</th>
                    </tr>
                </thead>
                <tbody>
                    {props.investimentos.map(investimento => {

                        

                        return <tr key={investimento.id}>
                            <th>{investimento.nome}</th>
                            <td>R$ {parseFloat(investimento.valor).toFixed(2).replace(".", ",")}</td>
                            <td>{investimento.quantidade.replace(".", ",")}</td>
                            <td>R$ {(parseFloat(investimento.valor.replace(",", ".")) * parseFloat(investimento.quantidade.replace(",", "."))).toFixed(2).replace(".", ",")}</td>
                            <td>
                                <button onClick={() => props.removerInvestimento(investimento.id)} title='Remover Investimento'>
                                    <FontAwesomeIcon icon={faTrashCan} />
                                </button>
                            </td>
                        </tr>
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <th>Total Investido</th>
                        <td></td>
                        <td></td>
                        <th>R$ {props.investimentos.reduce((accumulator, currentValue) => accumulator + parseFloat((parseFloat(currentValue.valor) * parseFloat(currentValue.quantidade)).toFixed(2)), 0)}</th>
                    </tr>
                </tfoot>
            </table>
        </section>
    )
}

export default Tabela;