import { faEdit, faHome, faUserAlt } from "@fortawesome/free-regular-svg-icons";
import { faHistory } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MenuMobile.css"


export default function MenuMobile() {
  return (
    <div className="fixed bottom-0 right-0 left-0">
      <nav id="menuMobile" className="">
        <ul className="grid grid-cols-4 text-center">
          <li className="hover:bg-gray-800">
            <FontAwesomeIcon icon={faHome} />
          </li>
          <li className="hover:bg-gray-800">
            <FontAwesomeIcon icon={faHistory} />
          </li>
          <li className="hover:bg-gray-800">
            <FontAwesomeIcon icon={faEdit} />
          </li>
          <li className="hover:bg-gray-800">
            <FontAwesomeIcon icon={faUserAlt} />
          </li>
        </ul>
      </nav>
    </div>
  );
}
