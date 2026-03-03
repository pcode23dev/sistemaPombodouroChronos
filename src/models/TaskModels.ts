import type { TaskStatesModels } from "./TaskStatesModels";

export interface TaskModel {
  id: string;
  nomeTask: string;
  startData: number;
  duracao: number;
  completeDate: number | null;
  interuptDate: number | null;
  type: keyof TaskStatesModels['config'];
}
