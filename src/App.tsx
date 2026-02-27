import "./styles/global.css";
import "./styles/tema.css";

export default function App() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-bg-color text-text-color">
      <div>
        <nav className="hidden md:block">
          <ul className="flex justify-around py-2">
            <li>Historico</li>
            <li>Home</li>
            <li>Ajustes</li>
            <li>Perfil</li>
          </ul>
        </nav>
      </div>
      <div id="headerMobile">
        <h1 className="text-2xl font-bold text-center">Chronos Pombodouro</h1>
      </div>
      <div id="section">
        <h2 className="text-xl font-semibold text-center">
          Bem-vindo ao Chronos Pombodouro!
        </h2>
      </div>
      <div id="footerMenuMobile" className="md:hidden">
        <nav id="menuMobile" className="">
          <ul className="flex justify-around py-2">
            <li>Home</li>
            <li>Historico</li>
            <li>Ajustes</li>
            <li>Perfil</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
