import type { TaskStatesModels } from "../../models/TaskStatesModels";

export const inicialState: TaskStatesModels = {
  task: [],
  secandsEmAndamento: 0,
  formatedSecandsEmAndamento: "00:00",
  activeTask: null,
  currentCiclo: 0,
  config: {
    workTime: 25,
    sortBreak: 5,
    longBreak: 15,
  },
};