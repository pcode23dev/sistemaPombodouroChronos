import type React from "react";
import { TaskContext } from "./TaskContext";
import { useState } from "react";
import { inicialState } from "./inicialStateValue";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export default function TaskContextProvider({
  children,
}: TaskContextProviderProps) {
  const [state, setState] = useState(inicialState);

  return (
    <>
      <TaskContext.Provider value={{ state, setState }}>
        {children}
      </TaskContext.Provider>
    </>
  );
}
