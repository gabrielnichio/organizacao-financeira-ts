import { useState } from "react";
import Banner from "./Banner";
import Formulario from "./Formulario";
import Tabela from "./Tabela";

function App(props) {

  const tiposIvestimentos = [
    {
      nome: "Ações",
      color: '#4BE3DE',
      columnName: 'Ação'
    },
    {
      nome: "Fundos Imobiliários",
      color: '#4AE69E',
      columnName: 'FII'
    },
    {
      nome: "Tesouro Direto",
      color: '#4BE64E',
      columnName: 'Título'
    },
    {
      nome: "Renda Fixa",
      color: '#279DE6',
      columnName: 'Título'
    },
    {
      nome: "Exterior",
      color: '#4D6EE5',
      columnName: 'EUA'
    }
  ];

  const [listaInvestimentos, setInvestimentos] = useState([]);

  const cadastraInvestimentos = (investimento) => {
    setInvestimentos([...listaInvestimentos, investimento]);
  }

  const removerInvestimento = (id) => {
    const investimentosComLinhaRemovida = listaInvestimentos.filter(investimento => investimento.id !== id);
    setInvestimentos(investimentosComLinhaRemovida);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario tipos={tiposIvestimentos.map(tipo => tipo.nome)} aoSubmeterInvestimentos={investimento => cadastraInvestimentos(investimento)} />

      {tiposIvestimentos.map(tipo => <Tabela
        key={tipo.nome}
        label={tipo.nome}
        columnName={tipo.columnName}
        cor={tipo.color}
        investimentos={listaInvestimentos.filter(investimento => investimento.tipo === tipo.nome)}
        removerInvestimento={removerInvestimento} 
      />)}

    </div>
  );
}

export default App;
