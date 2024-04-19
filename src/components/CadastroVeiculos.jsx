import { useState } from "react";

const CadastroVeiculos = () => {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [ano, setAno] = useState("");
  const [placa, setPlaca] = useState("");
  const [combustivel, setCombustivel] = useState("gasolina");
  const [setor, setSetor] = useState("");
  const [veiculosCadastrados, setVeiculosCadastrados] = useState([]);
  const [mostrarVeiculos, setMostrarVeiculos] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const novoVeiculo = {
      marca,
      modelo,
      ano,
      placa,
      combustivel,
      setor,
    };

    setVeiculosCadastrados([...veiculosCadastrados, novoVeiculo]);

    // Limpar os campos após o cadastro:
    setMarca("");
    setModelo("");
    setAno("");
    setPlaca("");
    setCombustivel("gasolina");
    setSetor("");
  };

  return (
    <div className="flex flex-col items-center text-white">
      <h2 className="text-2xl font-bold mb-4">Cadastro de Veículos</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="marca" className="block font-bold">
            Marca:
          </label>
          <input
            type="text"
            id="marca"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
            className="w-[800px] p-2 border border-gray-300 rounded text-black"
          />
        </div>
        <div>
          <label htmlFor="modelo" className="block font-bold">
            Modelo:
          </label>
          <input
            type="text"
            id="modelo"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
            className="w-[800px] p-2 border border-gray-300 rounded text-black"
          />
        </div>
        <div>
          <label htmlFor="ano" className="block font-bold">
            Ano:
          </label>
          <input
            type="number"
            id="ano"
            value={ano}
            onChange={(e) => setAno(e.target.value)}
            className="w-[800px] p-2 border border-gray-300 rounded text-black"
          />
        </div>
        <div>
          <label htmlFor="placa" className="block font-bold">
            Placa:
          </label>
          <input
            type="text"
            id="placa"
            value={placa}
            onChange={(e) => setPlaca(e.target.value)}
            className="w-[800px] p-2 border border-gray-300 rounded text-black"
          />
        </div>
        <div>
          <label htmlFor="combustivel" className="block font-bold">
            Tipo de Combustível:
          </label>
          <select
            id="combustivel"
            value={combustivel}
            onChange={(e) => setCombustivel(e.target.value)}
            className="w-[800px] p-2 border border-gray-300 rounded text-black"
          >
            <option value="gasolina">Gasolina</option>
            <option value="diesel">Diesel</option>
            <option value="alcool">Álcool</option>
          </select>
        </div>
        <div>
          <label htmlFor="setor" className="block font-bold">
            Setor:
          </label>
          <input
            type="text"
            id="setor"
            value={setor}
            onChange={(e) => setSetor(e.target.value)}
            className="w-[800px] p-2 border border-gray-300 rounded text-black"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-[50%] p-2 border border-gray-300 rounded hover:bg-blue-500"
          >
            Cadastrar
          </button>
          <button
            type="button"
            onClick={() => setMostrarVeiculos(!mostrarVeiculos)}
            className="w-[49%] ml-2 px-4 py-2 bg-emerald-200 text-black rounded hover:bg-red-300"
          >
            {mostrarVeiculos ? "Ocultar Veículos" : "Mostrar Veículos Cadastrados"}
          </button>
        </div>
      </form>
      {mostrarVeiculos && veiculosCadastrados.length > 0 && (
        <div className="mt-4">
          <h2 className="text-2xl font-bold">Veículos Cadastrados</h2>
          <ul className="list-disc list-inside mt-2">
            {veiculosCadastrados.map((veiculo, index) => (
              <li key={index} className="mb-2">
                <strong>Marca:</strong> {veiculo.marca},{" "}
                <strong>Modelo:</strong> {veiculo.modelo},{" "}
                <strong>Ano:</strong> {veiculo.ano},{" "}
                <strong>Placa:</strong> {veiculo.placa},{" "}
                <strong>Combustível:</strong> {veiculo.combustivel},{" "}
                <strong>Setor:</strong> {veiculo.setor}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CadastroVeiculos;
