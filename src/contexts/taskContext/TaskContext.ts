import { createContext } from "react";
import { inicialState } from "./inicialStateValue";
import type { TaskStatesModels } from "../../models/TaskStatesModels";

type TaskContextProps = {
  state: TaskStatesModels;
  setState: React.Dispatch<React.SetStateAction<TaskStatesModels>>;
};

export const TaskContext = createContext<TaskContextProps>({
  state: inicialState,
  setState: () => {},
});
