import { useState } from "react";
import DefaultInput from "../defaultInput/DefaultInput";
import Circles from "../arrayCiloPomodoro/Circles";
import DefaulButton from "../defaultBotao/DefaulButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faStopCircle,
} from "@fortawesome/free-regular-svg-icons";

export default function Mainform() {
  const [cicloCount, setCicloCount] = useState<number>(0);
  const [isRunActivite, setIsRunActivite] = useState(false);
  const msgActivity = [
    "Foco",
    "Pausa curta",
    "Foco",
    "Pausa curta",
    "Foco",
    "Pausa curta",
    "Foco",
    "Pausa Longa",
  ];

  const checkStates = () => {
    setCicloCount((prev) => (prev >= 8 ? 0 : prev + 1));
    setIsRunActivite(true);
    console.log("number", cicloCount);
  };

  const cancelActivity = () => {
    setIsRunActivite(false);
    if (cicloCount == 8) {
      setCicloCount(0);
    }
  };

  return (
    <form className="flex flex-col items-center text-center text-xl gap-y-5">
      {cicloCount === 0 && (
        <DefaultInput id="tarefa" type="text" tittle="Tarefa" />
      )}
      <p className="text-[1.1rem] w-90">
        {cicloCount == 0
          ? "Clique em start para começar"
          : msgActivity[cicloCount - 1]}
      </p>
      <Circles actualState={cicloCount} />
      {isRunActivite ? (
        <DefaulButton
          onClick={cancelActivity}
          color="bg-red-500"
          icon={<FontAwesomeIcon icon={faStopCircle} />}
        />
      ) : (
        <DefaulButton
          onClick={checkStates}
          color="bg-green-500"
          icon={<FontAwesomeIcon icon={faPlayCircle} />}
        />
      )}
    </form>
  );
}
