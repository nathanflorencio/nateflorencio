import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-blue-300 rounded-xl flex flex-col items-center w-full md:flex-row">
      <h1 className="text-4xl p-3 font-bold text-blue-500 md:text-5xl lg:text-7xl">NateFlorencio</h1>
      <nav className="text-sm w-full ml-2 mr-2 rounded-lg bg-blue-200 pb-1 flex flex-row justify-center items-center md:text-base lg:text-xl lg:mr-10">
        <Link to="/" className="m-2 hover:text-blue-500 lg:mr-10">Página Inicial</Link>
        <Link to="/meus-conhecimentos" className="m-2 hover:text-blue-500 lg:mr-10">Conhecimentos</Link>
        <Link to="/redes-sociais" className="m-2 hover:text-blue-500 lg:ml-10">Redes Sociais</Link>
      </nav>
    </header>
  );
}