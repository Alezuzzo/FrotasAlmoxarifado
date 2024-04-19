import React, { useState } from "react";

const ListaPecasCadastradas = ({ pecasCadastradas, onReduceQuantity, onIncreaseQuantity }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [scassAlert, setScassAlert] = useState(false);

  const handleReduceQuantity = (index) => {
    if (pecasCadastradas[index].quantidade > 0) {
      const newQuantity = pecasCadastradas[index].quantidade - 1;
      onReduceQuantity(index, newQuantity);
      if (newQuantity <= 5) {
        setScassAlert(true);
      } else {
        setScassAlert(false);
      }
      if (newQuantity <= 5) {
        alert("Peça ficando em falta!");
      }
    }
  };

  const handleIncreaseQuantity = (index) => {
    const newQuantity = pecasCadastradas[index].quantidade + 1;
    onIncreaseQuantity(index, newQuantity);
    if (newQuantity <= 5) {
      setScassAlert(true);
    } else {
      setScassAlert(false);
    }
    if (newQuantity <= 5) {
      alert("Peça ficando em falta!");
    }
  };

  const filteredPecas = pecasCadastradas.filter((peca) =>
    peca.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Ordenar a lista de peças: peças com 5 ou menos unidades aparecerão no topo.
  const sortedPecas = filteredPecas.sort((a, b) => {
    if (a.quantidade <= 5 && b.quantidade > 5) return -1;
    if (a.quantidade > 5 && b.quantidade <= 5) return 1;
    return 0;
  });

  return (
    <div>
      <div className="mb-4">
        <label htmlFor="search" className="block font-semibold">
          Pesquisar Peça:
        </label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-[800px] p-2 border border-gray-300 rounded text-black"
          placeholder="Digite o nome da peça..."
        />
      </div>
      {filteredPecas.length > 0 ? (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="border py-2 px-4">Nome</th>
              <th className="border py-2 px-4">Quantidade</th>
              <th className="border py-2 px-4">Marca do Veículo</th>
              <th className="border py-2 px-4">Modelo do Veículo</th>
              <th className="border py-2 px-4">Ações</th>
            </tr>
          </thead>
          <tbody>
            {sortedPecas.map((peca, index) => (
              <tr
                key={index}
                className={peca.quantidade <= 5 ? "text-red-500" : ""}
              >
                <td className="border py-2 px-4">{peca.nome}</td>
                <td className="border py-2 px-4">{peca.quantidade}</td>
                <td className="border py-2 px-4">{peca.marcaVeiculo}</td>
                <td className="border py-2 px-4">{peca.modeloVeiculo}</td>
                <td className="border py-2 px-4">
                  <button onClick={() => handleReduceQuantity(index)}>-</button>
                  <button onClick={() => handleIncreaseQuantity(index)}>+</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Nenhuma peça cadastrada.</p>
      )}
      {scassAlert && (
        <div className="mt-4 text-red-500">
          Algumas peças estão escassas! A quantidade é igual ou menor que 5.
        </div>
      )}
    </div>
  );
};

export default ListaPecasCadastradas;
