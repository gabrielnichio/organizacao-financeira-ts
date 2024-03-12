import { useState } from 'react';
import CampoTexto from '../CampoTexto';
import './Formulario.css';
import Botao from '../Botao';
import ListaInvestimentos from '../ListaInvestimentos';

const Formulario = (props) => {


    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [tipo, setTipo] = useState(props.tipos[0]);

    const aoSalvar = (evento) => {
        evento.preventDefault();



        props.aoSubmeterInvestimentos({
            id: Math.random().toFixed(2),
            nome,
            valor,
            quantidade,
            tipo
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
                    type="text"
                />
                <CampoTexto
                    label='Valor unitario' 
                    valor={valor}
                    placeholder='Digite aqui'
                    aoAlterado={valor => setValor(valor)}
                    obrigatorio={true}
                    type="number"
                />
                <CampoTexto
                    label='Quantidade'
                    valor={quantidade}
                    placeholder='Digite aqui'
                    aoAlterado={valor => setQuantidade(valor)}
                    obrigatorio={true}
                    type="number"
                />
                <ListaInvestimentos
                    label = 'Tipo'
                    lista = {props.tipos}
                    valor = {tipo}
                    placeholder = "Selecione o tipo do investimento"
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