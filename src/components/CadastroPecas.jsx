import React, { useState } from "react";
import ListaPecasCadastradas from "./ListaPecasCadastradas";

const CadastroPecas = ({ onCadastro }) => {
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [marcaVeiculo, setMarcaVeiculo] = useState("");
  const [modeloVeiculo, setModeloVeiculo] = useState("");
  const [pecasCadastradas, setPecasCadastradas] = useState([]);
  const [mostrarPecas, setMostrarPecas] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const novaPeca = {
      nome,
      quantidade: parseInt(quantidade),
      marcaVeiculo,
      modeloVeiculo,
    };

    // Verificar se já existe uma peça com o mesmo nome
    const pecaExistente = pecasCadastradas.find(
      (peca) => peca.nome === nome
    );

    if (pecaExistente) {
      // Se já existe, atualize a quantidade da peça existente
      const novaQuantidade =
        pecaExistente.quantidade + parseInt(quantidade);
      const novasPecas = pecasCadastradas.map((peca) =>
        peca.nome === nome
          ? { ...peca, quantidade: novaQuantidade }
          : peca
      );
      setPecasCadastradas(novasPecas);
    } else {
      // Se não existe, adicione a nova peça à lista de peças cadastradas
      setPecasCadastradas([...pecasCadastradas, novaPeca]);
    }

    // Limpar os campos após o cadastro:
    setNome("");
    setQuantidade("");
    setMarcaVeiculo("");
    setModeloVeiculo("");
  };

  const toggleMostrarPecas = () => {
    setMostrarPecas(!mostrarPecas);
  };

  return (
    <div className="flex flex-col items-center justify-center text-white">
      <h2 className="text-xl font-semibold mb-4">
        Cadastro de Peças
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="nome" className="block font-semibold">
            Nome da Peça:
          </label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-[800px] p-2 border border-gray-300 rounded text-black"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="quantidade" className="block font-semibold">
            Quantidade:
          </label>
          <input
            type="number"
            id="quantidade"
            value={quantidade}
            onChange={(e) => setQuantidade(e.target.value)}
            className="w-[800px] p-2 border border-gray-300 rounded text-black"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="marcaVeiculo"
            className="block font-semibold"
          >
            Marca do Veículo:
          </label>
          <input
            type="text"
            id="marcaVeiculo"
            value={marcaVeiculo}
            onChange={(e) => setMarcaVeiculo(e.target.value)}
            className="w-[800px] p-2 border border-gray-300 rounded text-black"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="modeloVeiculo"
            className="block font-semibold"
          >
            Modelo do Veículo:
          </label>
          <input
            type="text"
            id="modeloVeiculo"
            value={modeloVeiculo}
            onChange={(e) => setModeloVeiculo(e.target.value)}
            className="w-[800px] p-2 border border-gray-300 rounded text-black"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded w-[50%]"
        >
          Cadastrar
        </button>
        <button
          onClick={toggleMostrarPecas}
          className="mt-4 bg-gray-500 hover:bg-gray-600 text-white font-semibold px-4 py-2 rounded w-[49%] ml-[1%]"
        >
          {mostrarPecas
            ? "Ocultar Peças Cadastradas"
            : "Mostrar Peças Cadastradas"}
        </button>

        {mostrarPecas && (
          <ListaPecasCadastradas
            pecasCadastradas={pecasCadastradas}
            onReduceQuantity={(index, newQuantity) => {
              const updatedPecas = [...pecasCadastradas];
              updatedPecas[index].quantidade = newQuantity;
              setPecasCadastradas(updatedPecas);
            }}
            onIncreaseQuantity={(index, newQuantity) => {
              const updatedPecas = [...pecasCadastradas];
              updatedPecas[index].quantidade = newQuantity;
              setPecasCadastradas(updatedPecas);
            }}
          />
        )}
      </form>
    </div>
  );
};

export default CadastroPecas;
