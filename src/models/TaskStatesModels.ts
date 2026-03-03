import type { TaskModel } from "./taskModels";


export interface TaskStatesModels {
  task: TaskModel[];
  secandsEmAndamento: number;
  formatedSecandsEmAndamento: string;
  activeTask: TaskModel;
  currentCiclo: number;
  config: {
    workTime: number;
    sortBreak: number;
    longBreak: number;
  }
}