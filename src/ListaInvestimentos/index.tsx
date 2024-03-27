import './ListaInvestimentos.css';

interface ListaInvestimentosProps {
    label: String;
    valor: string;
    lista: string[];
    obrigatorio: boolean;
    aoAlterado: (value: string) => void;
}

const ListaInvestimentos = ({ aoAlterado, label, lista, valor, obrigatorio }: ListaInvestimentosProps) => {

    return (
        <div className='lista-investimentos'>
            <label>{label}</label>
            <select onChange={evento => aoAlterado(evento.target.value)} value={valor} required={obrigatorio}>
                <option key={""}></option>
                {lista.map(value => <option key={value}>{value}</option>)}
            </select>
        </div>
    )
}

export default ListaInvestimentos;