import { useTaskContext } from "../../contexts/taskContext/useTaskContext";

export default function Circles() {
  type Circles = {
    color: string;
    details: string;
  };

  const {state} = useTaskContext();

  const circleColor: Circles[] = Array(5);

  return (
    <div className="flex flex-col items-center justify-center gap-y-2">
      <span></span>
      <div className="flex items-center justify-center gap-x-1">
       {circleColor.slice(0,Number(state.currentCiclo)).map((circ, index) => (
          <span
            key={index}
            className={`w-6 h-6 rounded-full cursor-pointer hover:opacity-80 ${circ.color}`}
          ></span>
        ))}
      </div>
    </div>
  );
}
