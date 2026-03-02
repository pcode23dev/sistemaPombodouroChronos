import "./styles/global.css";
import "./styles/theme.css";
import MenuMobile from "./components/MenuMobile";
import Headding from "./components/Headding";
import Header from "./components/Header";
import CountDown from "./components/CountDown";
import {
  faPlayCircle,
  faStopCircle,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DefaultInput from "./components/DefaultInput";
import Circles from "./components/Circles";
import DefaulButton from "./components/DefaulButton";
import { useState } from "react";

export default function App() {
  const [cicloCount, setCicloCount] = useState<number>(0);
  const [isRunActivite, setIsRunActivite] = useState(false);

  const checkStates = () => {
    setCicloCount(prev => (prev >= 8 ? 0 : prev + 1));
    setIsRunActivite(true);
    console.log("number", cicloCount);
  };

  const cancelActivity = () => {
    setIsRunActivite(false);
  };

  return (
    <div className="relative">
      <div className="container mx-auto">
        <Header tittle="Chronos">
          <Headding>
            <p className="text-sm">Clique em start para iniciar tarefa</p>
            <h1>{cicloCount}</h1>
          </Headding>
        </Header>
        <CountDown />
        <div className="py-2">
          <form className="flex flex-col items-center text-center text-xl gap-y-5">
            <DefaultInput id="tarefa" type="text" />
            <div>
              <p className="text-[1.1rem] w-90">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </p>
            </div>
            <Circles actualState={cicloCount} />
            {isRunActivite ? (
              <DefaulButton
                onClick={cancelActivity}
                color="red"
                icon={<FontAwesomeIcon icon={faStopCircle} />}
              />
            ) : (
              <DefaulButton
                onClick={checkStates}
                color="green"
                icon={<FontAwesomeIcon icon={faPlayCircle} />}
              />
            )}
          </form>
        </div>
        <MenuMobile />
      </div>
    </div>
  );
}
