import './CampoTexto.css';

const CampoTexto = (props) => {

    const aoDigitar = (evento) => {
        const inputValor = evento.target.value;
        props.aoAlterado(inputValor)
    }

    return (
        <section className='campo-texto'>
            <label>{props.label}</label>
            <input value = {props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={props.placeholder} type={props.type}></input>
        </section>
    )
}

export default CampoTexto;