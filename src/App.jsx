import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CadastroPecas from './components/CadastroPecas';
import CadastroVeiculos from './components/CadastroVeiculos';
import NavBar from './components/NavBar';
import Inicial from './components/Inicial';
import 'tailwindcss/tailwind.css';

const App = () => {
  const [veiculosCadastrados, setVeiculosCadastrados] = useState([]);
  const [pecasCadastradas, setPecasCadastradas] = useState([]);

  const handleCadastroVeiculo = (novoVeiculo) => {
    setVeiculosCadastrados([...veiculosCadastrados, novoVeiculo]);
  };

  const handleCadastroPeca = (novaPeca) => {
    const pecaJaCadastrada = pecasCadastradas.find((peca) => peca.nome === novaPeca.nome);

    if (pecaJaCadastrada) {
      // Se a peça já está cadastrada, atualiza apenas a quantidade
      setPecasCadastradas(
        pecasCadastradas.map((peca) =>
          peca.nome === novaPeca.nome ? { ...peca, quantidade: peca.quantidade + novaPeca.quantidade } : peca
        )
      );
    } else {
      setPecasCadastradas([...pecasCadastradas, novaPeca]);
    }
  };

  return (
    <Router>
      <NavBar />
      <div className="mt-16">
        
        <Routes>
          <Route path="/cadastro-veiculos" element={<CadastroVeiculos onCadastro={handleCadastroVeiculo} veiculosCadastrados={veiculosCadastrados} />} />
          <Route path="/cadastro-pecas" element={<CadastroPecas onCadastro={handleCadastroPeca} pecasCadastradas={pecasCadastradas} />} />
          {/* Adicione mais rotas aqui conforme necessário */}
          <Route path="/" element={<Inicial/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
