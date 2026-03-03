import MainTemplete from "../../templates/MainTemplete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

export default function PageNotFound() {
  return (
    <MainTemplete>
      <div className="flex flex-col items-center justify-center h-full text-center py-20">
        <FontAwesomeIcon
          icon={faExclamationTriangle}
          className="text-warning text-6xl mb-6 text-red-500"
        />
        <h1 className="text-3xl font-bold text-error mb-4">
          Página não encontrada
        </h1>
        <p className="w-85 text-muted mb-8 text-xl">
          O conteúdo que você procura não existe ou foi movido.
        </p>
        <a
          href="/"
          className="text-xl p-3 rounded-md bg-blue-400  hover:opacity-80 transition-colors"
        >
          Voltar para o início
        </a>
      </div>
    </MainTemplete>
  );
}
