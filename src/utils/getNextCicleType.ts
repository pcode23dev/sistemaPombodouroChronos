import type { TaskModel } from "../models/TaskModels";

export default function getNextCicleType(current: number): TaskModel["type"] {

    if (current%8===0) return "longBreak";
    if (current%2===0) return "sortBreak";
    return "workTime";
    
}