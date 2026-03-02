import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ElementChildrenProps } from "../types/EementChildrenProps";


export default function Header({ children , tittle}: ElementChildrenProps) {
  return (
    <>
      <div className="flex flex-col justify-content-center justify-center items-center gap-2 p-6">
        <FontAwesomeIcon className="text-7xl" icon={faClock}></FontAwesomeIcon>
        <h2 className="text-4xl py-2">{tittle}</h2>
        {children}
      </div>
    </>
  );
}
