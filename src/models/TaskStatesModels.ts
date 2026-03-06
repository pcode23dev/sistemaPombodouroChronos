import type { TaskModel } from "./TaskModels";

export interface TaskStatesModels {
  task: TaskModel[];
  secandsEmAndamento: number;
  formatedSecandsEmAndamento: string;
  activeTask: TaskModel | null;
  currentCiclo: number;
  config: {
    workTime: number;
    sortBreak: number;
    longBreak: number;
  }
}