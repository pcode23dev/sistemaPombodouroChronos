import { useEffect, useState } from "react";
import DefaultInput from "../defaultInput/DefaultInput";
import Circles from "../circles/Circles";
import DefaulButton from "../defaulButton/DefaulButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle
} from "@fortawesome/free-regular-svg-icons";
import type { TaskModel } from "../../models/TaskModels";
import { useTaskContext } from "../../contexts/taskContext/useTaskContext";
import getNextCicle from "../../utils/getNextCicle";
import getNextCicleType from "../../utils/getNextCicleType";
import formatSecondsRemaind from "../../utils/formatSecondsRemaind";

export default function Mainform() {
  const [inputValue, setInputValue] = useState<string>("");
  const { state, setState } = useTaskContext();
  const nextCicle = getNextCicle(state.currentCiclo);
  const nextCileType = getNextCicleType(nextCicle);

  console.log("Proximo ciclo: ", nextCicle);

  const handleCreateTask = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.trim() == "") {
      console.log("Digite a tarefa");
      return;
    }

    const novaTarefa: TaskModel = {
      id: Date.now().toString(),
      nomeTask: inputValue,
      interuptDate: null,
      completeDate: null,
      duracao: state.config[nextCileType],
      startData: Date.now(),
      type: nextCileType,
    };

    setState((prev) => {
      return {
        ...prev,
        config: { ...prev.config },
        activeTask: novaTarefa,
        currentCiclo: nextCicle,
        secandsEmAndamento: novaTarefa.duracao * 60,
        formatedSecandsEmAndamento: formatSecondsRemaind(novaTarefa.duracao*60),
        task: [...prev.task, novaTarefa],
      };
    });

    console.log("Result:", state);
  };

  useEffect(() => {
    console.log("InputValue: ", inputValue);
  }, [inputValue]);

  return (
    <form
      onSubmit={handleCreateTask}
      className="flex flex-col items-center text-center text-xl gap-y-5"
    >
      <DefaultInput
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        id="tarefa"
        type="text"
        tittle="Tarefa"
      />
      <p className="text-[1.1rem] w-90">
        {nextCicle == 0 ? "Clique em start para começar" : (nextCileType)}
      </p>

      <Circles />

      <DefaulButton
        color="bg-green-500"
        type="submit"
        icon={<FontAwesomeIcon icon={faPlayCircle} />}
      />
    </form>
  );
}
