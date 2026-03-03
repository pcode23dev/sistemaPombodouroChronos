import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type HeaddingProps = {
  tittle?: string;
  children: React.ReactNode;
};
export default function Headding({ children , tittle}: HeaddingProps) {
  return (
    <>
      <div className="flex flex-col justify-content-center justify-center items-center gap-2 p-6">
        <FontAwesomeIcon className="text-7xl" icon={faClock}></FontAwesomeIcon>
        <h2 className="text-4xl py-2 text-uppercase">{tittle}</h2>
        {children}
      </div>
    </>
  );
}