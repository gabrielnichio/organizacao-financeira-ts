import './CampoTexto.css';

interface CampoTextoProps {
    aoAlterado: (valor: string) => void;
    placeholder: string;
    label: string;
    valor: string;
    obrigatorio: boolean;
    type?: "text" | "password" | "date" | "email" | "number";
    min?: string;
    step?: string;
}

const CampoTexto = ({ aoAlterado, label, obrigatorio, placeholder, type, valor, min }: CampoTextoProps) => {

    const aoDigitar = (evento: React.ChangeEvent<HTMLInputElement>) => {
        const inputValor = evento.target.value;
        aoAlterado(inputValor)
    }

    return (
        <section className='campo-texto'>
            <label>{label}</label>
            <input value={valor} onChange={aoDigitar} required={obrigatorio} placeholder={placeholder} type={type} min={min}></input>
        </section>
    )
}

export default CampoTexto;