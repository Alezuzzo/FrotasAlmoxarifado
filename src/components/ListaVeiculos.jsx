import React from 'react';

const ListaVeiculos = ({ veiculos }) => {
  return (
    <div>
      <h3>Veículos cadastrados:</h3>
      <ul>
        {veiculos.map((veiculo, index) => (
          <li key={index}>
            <strong>Marca:</strong> {veiculo.marca},{' '}
            <strong>Modelo:</strong> {veiculo.modelo},{' '}
            <strong>Ano:</strong> {veiculo.ano},{' '}
            <strong>Placa:</strong> {veiculo.placa},{' '}
            <strong>Combustível:</strong> {veiculo.combustivel},{' '}
            <strong>Setor:</strong> {veiculo.setor}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaVeiculos;
