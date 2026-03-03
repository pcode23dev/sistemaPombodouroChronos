import {
  faEdit,
  faHome,
  faMoon,
  faSun,
} from "@fortawesome/free-regular-svg-icons";
import { faHistory } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MenuMobile.css";
import { useEffect, useState } from "react";

type Themas = "dark" | "light";

export default function MenuMobile() {
  const [isDark, setIsDark] = useState(true);
  const [theme, setTheme] = useState<Themas>(() => {
      const storageTheme = localStorage.getItem("data-theme") as Themas || "dark";
      return storageTheme;

  });

  const handleThema = () => {
    setTheme((prev) => {
      const nextTheme = prev === "dark" ? "light" : "dark";
      setIsDark(nextTheme === "dark");
      return nextTheme;
    });
  };

 

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("data-theme", theme);
  }, [theme]);

  return (
    <div className="fixed bottom-0 right-0 left-0 sm:w-100 sm:mx-auto">
      <nav id="menuMobile" className="">
        <ul className="grid grid-cols-4 text-center">
          <li
            className="hover:opacity-20 cursor-pointer "
            aria-label="Home"
            title="Home"
          >
            <FontAwesomeIcon icon={faHome} />
          </li>
          <li
            className="hover:opacity-20 cursor-pointer"
            aria-label="Historico"
            title="Historico"
          >
            <FontAwesomeIcon icon={faHistory} />
          </li>
          <li
            className="hover:opacity-20 cursor-pointer"
            aria-label="Ajustes"
            title="Ajustes"
          >
            <FontAwesomeIcon icon={faEdit} />
          </li>
          <li
            onClick={handleThema}
            className="hover:opacity-20 cursor-pointer"
            aria-label={!isDark ? "Modo escuro" : "Modo claro"}
            title={!isDark ? "Modo escuro" : "Modo claro"}
          >
            <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
          </li>
        </ul>
      </nav>
    </div>
  );
}
