import Headding from "../components/header/Headding";
import MenuMobile from "../components/menuMobile/MenuMobile";


type MainTempleteProps = {
  children: React.ReactNode;
};

export default function MainTemplete({ children }: MainTempleteProps) {
  return (
    <div className="relative">
      <div className="container mx-auto">
        <Headding tittle="Chronos">
          <p className="text-xl text-center">
            Aprenda a organizar suas actividades
          </p>
        </Headding>

        {children}

        <MenuMobile />
      </div>
    </div>
  );
}
