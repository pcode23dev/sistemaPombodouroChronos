import "./styles/global.css";
import "./styles/theme.css";
import MenuMobile from "./components/MenuMobile";
import Headding from "./components/Headding";
import Header from "./components/Header";
import CountDown from "./components/CountDown";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function App() {
  return (
    <div className="relative">
      <div className="container mx-auto">
        <Header tittle="Chronos">
          <Headding>
            <p className="text-sm">bntye  Clique em start para iniciar tarefa</p>
          </Headding>
        </Header>
        <CountDown />
        <div className="py-2">
          <form className="flex flex-col items-center text-center text-xl gap-y-4">
            <div className="border border-gray-500 rounded p-4">
              <label htmlFor="tarefa" className="flex flex-col items-start gap-y-2">
                <span className="text-sm">Tarefa:</span>
                <input
                  type="text"
                  id="tarefa"
                  className="rounded-2 text-[1.2rem] text-gray-500 outline-none w-75 "
                  placeholder="Fazer uma corrida"
                />
              </label>
            </div>
            <div>
              <p className="text-[1.1rem] w-90">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </div>
            <div className="">
              <button
                type="button"
                className="text-5xl cursor-pointer hover:bg-green-900 bg-green-700 text-gray-900 h-20 w-20 rounded-full transition-colors"
              >
                <FontAwesomeIcon className="" icon={faPlayCircle} />
              </button>
            </div>
          </form>
        </div>
        <MenuMobile />
      </div>
    </div>
  );
}
