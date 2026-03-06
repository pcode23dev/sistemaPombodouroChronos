import { useEffect } from "react";
import CountDown from "../../components/countDown/CountDown";
import Mainform from "../../components/mainForm/MainForm";
import { useTaskContext } from "../../contexts/taskContext/useTaskContext";
import MainTemplete from "../../templates/MainTemplete";

export default function PageHome() {
  const { state, setState } = useTaskContext();
  
  useEffect(() => {
    console.log("ContextValueChenged: ", state);
  }, [state]);

  return (
    <MainTemplete>
      <CountDown />
      <Mainform />
    </MainTemplete>
  );
}
