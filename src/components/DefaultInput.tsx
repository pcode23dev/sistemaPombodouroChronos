type DefaultInputPros = {
  tittle?: string | "";
  id: string | number;
} & React.ComponentProps<"input">;

export default function DefaultInput({ id, type, tittle, ...rest }: DefaultInputPros) {
  return (
    <div className="border border-gray-500 rounded p-4 border-b-green-900 border-b-4">
      <label htmlFor={id} className="flex flex-col items-start gap-y-2">
        <span className="text-sm">{tittle ? tittle : "labelText"}</span>
        <input
          type={type}
          id={id}
          className="rounded-2 text-[1.2rem] text-gray-500 outline-none w-75"
          placeholder="Fazer uma corrida"
          {...rest}
        />
      </label>
    </div>
  );
}
