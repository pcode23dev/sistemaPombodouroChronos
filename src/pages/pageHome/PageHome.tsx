import CountDown from "../../components/countDown/CountDown";
import Mainform from "../../components/mainForm/MainForm";
import MainTemplete from "../../templates/MainTemplete";

export default function PageHome() {


  return (
    <MainTemplete>
      <CountDown />
      <Mainform />
    </MainTemplete>
  );
}
