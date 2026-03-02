import type React from "react";

type DefaultInputPros = {
  icon: React.ReactNode;
  color?: "green" | "red" ;
} & React.ComponentProps<"button">;

export default function DefaulButton({  icon,  color, ...props}: DefaultInputPros) {
  return (
    <button
      type="button"
      className={`cursor-pointer  hover:opacity-80 bg-${color}-900 text-gray-800  transition-colors w-80 rounded p-2 text-[1.6rem]`}
      {...props}
    >
      {icon}
    </button>
  );
}
