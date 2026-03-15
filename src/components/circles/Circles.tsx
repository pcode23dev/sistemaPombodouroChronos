import { useTaskContext } from "../../contexts/taskContext/useTaskContext";
import getNextCicle from "../../utils/getNextCicle";
import getNextCicleType from "../../utils/getNextCicleType";

export default function Circles() {
  type Circles = {
    workTime: {
      color: string;
      details: string;
    };
    sortBreak: {
      color: string;
      details: string;
    };
    longBreak: {
      color: string;
      details: string;
    };
  };

  const { state } = useTaskContext();

  const circlo: Circles[] = Array.from({ length: state.currentCiclo });

  const cicloDEscricao: Circles = {
    workTime: {
      details: "foco",
      color: "bg-blue-400",
    },
    sortBreak: {
      details: "descanso curto",
      color: "bg-yellow-400",
    },
    longBreak: {
      details: "descanso longo",
      color: "bg-red-400",
    },
  };

  return (
    <div className="flex flex-col items-center justify-center gap-y-2">
      <span>Cyclos: </span>
      <div className="flex items-center justify-center gap-x-1">
        {circlo.map((_, index) => {
          const nextCicle = getNextCicle(index);
          const nextCicleDescription = getNextCicleType(nextCicle);

          return (
            <span
              key={nextCicle}
              className={`w-6 h-6 rounded-full cursor-pointer hover:opacity-80  ${cicloDEscricao[nextCicleDescription].color}`}
              title={`Indicador de ciclo de ${cicloDEscricao[nextCicleDescription].details}`}
              aria-label={`Indicador de ciclo de ${cicloDEscricao[nextCicleDescription].details}`}
            >
            </span>
          );
        })}
      </div>
    </div>
  );
}
