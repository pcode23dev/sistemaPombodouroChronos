import { useEffect, useState } from "react";
import DefaultInput from "../defaultInput/DefaultInput";
import Circles from "../circles/Circles";
import DefaulButton from "../defaulButton/DefaulButton";
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

  const cancelActivity = () => {
    setIsRunActivite(false);
    if (cicloCount == 8) {
      setCicloCount(0);
    }
  };
  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCicloCount((prev) => (prev >= 8 ? 0 : prev + 1));
    setIsRunActivite(true);
    console.log("number", cicloCount);
  };

  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    console.log("InputValue: ", inputValue);
  }, [inputValue]);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center text-center text-xl gap-y-5"
    >
      {cicloCount === 0 && (
        <DefaultInput
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          id="tarefa"
          type="text"
          tittle="Tarefa"
        />
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
          type="button"
          color="bg-red-500"
          icon={<FontAwesomeIcon icon={faStopCircle} />}
        />
      ) : (
        <DefaulButton
          color="bg-green-500"
          type="submit"
          icon={<FontAwesomeIcon icon={faPlayCircle} />}
        />
      )}
    </form>
  );
}
