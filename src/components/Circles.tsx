type Circles = {
  color: string;
  details: string;
};

type CircleProps = {
    actualState: number;
}
const colorBkeakDetails: Circles[] = [
  { color: "bg-[var(--info)]", details: "foco" },
  { color: "bg-[var(--warning)]", details: "sortBreak" },
  { color: "bg-[var(--info)]", details: "foco" },
  { color: "bg-[var(--warning)]", details: "sortBreak" },
  { color: "bg-[var(--info)]", details: "foco" },
  { color: "bg-[var(--warning)]", details: "sortBreak" },
  { color: "bg-[var(--info)]", details: "foco" },
  { color: "bg-[var(--error)]", details: "logBreak" },
];

export default function Circles({actualState}: CircleProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-y-2">
      <span></span>
      <div className="flex items-center justify-center gap-x-1">
        {colorBkeakDetails.slice(0,Number(actualState)).map((circ, index) => (
          <span
            key={index}
            className={`w-6 h-6 rounded-full cursor-pointer hover:opacity-80 ${circ.color}`}
          ></span>
        ))}
      </div>
    </div>
  );
}
