import { Link } from "react-router-dom";
import 'tailwindcss/tailwind.css';


const NavBar = () => {
  return (
    <nav>
      <ul className="flex flex-row space-x-6 items-center justify-center w-screen h-14 bg-slate-900 fixed mt-[-65px]">
        <li>
          <Link to="/cadastro-veiculos" className="text-white text-base hover:text-xl">Cadastro de Veículos</Link>
        </li>
        <li>
          <Link to="/cadastro-pecas" className="text-white text-base hover:text-xl">Cadastro de Peças</Link>
        </li>
        <li>
          <Link to="/" className="text-white text-base hover:text-xl">Página Inicial</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
