import { useEffect, useState } from "react";
import DefaultInput from "../defaultInput/DefaultInput";
import Circles from "../circles/Circles";
import DefaulButton from "../defaulButton/DefaulButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faStopCircle,
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

  const hendleStopBtn = () => {
    console.log("Interrompendo Actividade...");
    setState((prev) => {
      return {
        ...prev,
        activeTask: null,
        secandsEmAndamento: 0,
        formatedSecandsEmAndamento: formatSecondsRemaind(0),
        task: prev.task.map((t) => {
          if (prev.activeTask && prev.activeTask.id === t.id)
            return { ...t, interuptDate: Date.now() };
          return t;
        }),
      };
    });
  };

  const handleCreateTask = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.trim() == "") {
      alert("Digite a tarefa");
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
        formatedSecandsEmAndamento: formatSecondsRemaind(
          novaTarefa.duracao * 60,
        ),
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
        disabled={state.activeTask != null}
      />

      {state.currentCiclo > 0 && <Circles />}

      {state.activeTask ? (
        <DefaulButton
          key="Interromper tarefa actual"
          aria-label="Interromper tarefa actual"
          title="Interromper tarefa actual"
          color="bg-red-400"
          type="button"
          onClick={hendleStopBtn}
          icon={<FontAwesomeIcon icon={faStopCircle} />}
        />
      ) : (
        <DefaulButton
          key="Avançar tarefa actual"
          aria-label="Avançar tarefa actual"
          title="Avançar tarefa actual"
          color="bg-green-400"
          type="submit"
          icon={<FontAwesomeIcon icon={faPlayCircle} />}
        />
      )}
    </form>
  );
}
