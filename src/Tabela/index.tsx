import './Tabela.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { IInvestimentos } from '../Interfaces/IInvestimentos';

interface TabelaProps {
    investimentos: IInvestimentos[];
    cor: string;
    label: string;
    columnName: string;
    removerInvestimento: (id: string) => void;
}


const Tabela = ({ columnName, cor, investimentos, label, removerInvestimento }: TabelaProps) => {


    return (
        (investimentos.length > 0) && <section className='tabela' style={{ backgroundColor: cor }}>
            <h3>{label}</h3>
            <table>
                <thead>
                    <tr>
                        <th>{columnName}</th>
                        <th>Valor unitário</th>
                        <th>Quantidade</th>
                        <th>Total</th>
                        <th>Remover</th>
                    </tr>
                </thead>
                <tbody>
                    {investimentos.map(investimento => {



                        return <tr key={investimento.id}>
                            <th>{investimento.nome}</th>
                            <td>R$ {parseFloat(investimento.valor).toFixed(2).replace(".", ",")}</td>
                            <td>{investimento.quantidade.replace(".", ",")}</td>
                            <td>R$ {(parseFloat(investimento.valor.replace(",", ".")) * parseFloat(investimento.quantidade.replace(",", "."))).toFixed(2).replace(".", ",")}</td>
                            <td>
                                <button onClick={() => removerInvestimento(investimento.id)} title='Remover Investimento'>
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
                        <th>R$ {investimentos.reduce((accumulator, currentValue) => accumulator + parseFloat((parseFloat(currentValue.valor) * parseFloat(currentValue.quantidade)).toFixed(2)), 0)}</th>
                    </tr>
                </tfoot>
            </table>
        </section>
    )
}

export default Tabela;