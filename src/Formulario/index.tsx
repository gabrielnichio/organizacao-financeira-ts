import { useState } from 'react';
import CampoTexto from '../CampoTexto';
import './Formulario.css';
import Botao from '../Botao';
import ListaInvestimentos from '../ListaInvestimentos';
import { IInvestimentos } from '../Interfaces/IInvestimentos';

interface FormularioProps {
    aoSubmeterInvestimentos: (investimento: IInvestimentos) => void;
    tipos: string[]
}

const Formulario = ({ aoSubmeterInvestimentos, tipos }: FormularioProps) => {


    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [tipo, setTipo] = useState(tipos[0]);
    const [data, setData] = useState(tipos[0]);

    const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();

        aoSubmeterInvestimentos({
            id: Math.random().toFixed(2),
            nome,
            valor,
            quantidade,
            tipo,
            data
        });
        setNome('')
        setValor('')
        setQuantidade('')
        setTipo('')
    }


    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os campos para registrar o investimento</h2>
                <CampoTexto
                    label='Nome do ativo/passivo'
                    valor={nome}
                    placeholder='Digite aqui'
                    aoAlterado={valor => setNome(valor)}
                    obrigatorio={true}
                />
                <CampoTexto
                    label='Valor unitario'
                    valor={valor}
                    placeholder='Digite aqui'
                    aoAlterado={valor => setValor(valor)}
                    obrigatorio={true}
                    type="number"
                    step='0.01'
                />
                <CampoTexto
                    label='Quantidade'
                    valor={quantidade}
                    placeholder='Digite aqui'
                    aoAlterado={valor => setQuantidade(valor)}
                    obrigatorio={true}
                    type="number"
                    min='0'
                />
                <CampoTexto
                    label='Data de aplicação'
                    obrigatorio={true}
                    placeholder='Digite aqui'
                    valor={data}
                    type="date"
                    aoAlterado={valor => setData(valor)}
                />
                <ListaInvestimentos
                    label='Tipo'
                    lista={tipos}
                    valor={tipo}
                    obrigatorio={true}
                    aoAlterado={valor => setTipo(valor)}
                />
                <Botao>
                    Submeter investimento
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;