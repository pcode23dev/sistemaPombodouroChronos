import type React from "react";

type DefaultInputPros = {
  icon: React.ReactNode;
  color?: string ;
} & React.ComponentProps<"button">;

export default function DefaulButton({  icon,  color, ...props}: DefaultInputPros) {
  return (
    <button
      type={props.type}
      className={`cursor-pointer  hover:opacity-80 ${color} text-gray-800  transition-colors w-80 rounded p-2 text-[1.6rem]`}
      {...props}
    >
      {icon}
    </button>
  );
}
